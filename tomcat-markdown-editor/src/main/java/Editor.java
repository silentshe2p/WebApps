import java.io.IOException;
import java.sql.* ;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.Date;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import org.commonmark.node.*;
import org.commonmark.parser.Parser;
import org.commonmark.renderer.html.HtmlRenderer;
import org.commonmark.internal.util.Escaping;

import com.sun.net.httpserver.HttpServer;

import myutils.DBConnection;

/**
 * Servlet implementation class for Servlet: ConfigurationTest
 */
public class Editor extends HttpServlet {
    public static final String OPEN     = "open";
    public static final String SAVE     = "save";
    public static final String DELETE   = "delete";
    public static final String PREVIEW  = "preview";
    public static final String LIST     = "list";
    public static final int FIRST_POSTID = 1;
    /**
     * The Servlet constructor
     * @see javax.servlet.http.HttpServlet#HttpServlet()
     */
    public Editor() {}

    // public void init() throws ServletException
    // {
        /*  write any servlet initialization code here or remove this function */
    // }
    
    // public void destroy()
    // {
        /*  write any servlet cleanup code here or remove this function */
    // }

    /**
     * Handles HTTP GET requests
     * @see javax.servlet.http.HttpServlet#doGet(HttpServletRequest request,
     *      HttpServletResponse response)
     */
    public void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException 
    {
        if (request.getParameter("action") == null)
            handleInvalidReq(request, response, "No action provided");
        String action = request.getParameter("action");
        List<String> params;
        switch(action) {
            case OPEN:
                params = getParam(request, response, Arrays.asList("username", "postid"));
                handleOpen(request, response, params);
                request.getRequestDispatcher("/edit.jsp").forward(request, response);
                break;
            case PREVIEW:
                params = getParam(request, response, Arrays.asList("username", "postid", "title", "body"));
                handlePreview(request, response, params);
                request.getRequestDispatcher("/preview.jsp").forward(request, response);
                break;
            case LIST:
                params = getParam(request, response, Arrays.asList("username"));
                handleList(request, response, params);
                request.getRequestDispatcher("/list.jsp").forward(request, response);               
                break;
            case SAVE:
            case DELETE:
                handleInvalidReq(request, response, String.format("Action \"%s\" cannot be issued via GET method!", action));
            default:
                handleInvalidReq(request, response, "Invalid action via GET method!");
                break;
        }
    }
    
    /**
     * Handles HTTP POST requests
     * @see javax.servlet.http.HttpServlet#doPost(HttpServletRequest request,
     *      HttpServletResponse response)
     */
    public void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException
    {
        if (request.getParameter("action") == null)
            handleInvalidReq(request, response, "No action provided");            
        String action = request.getParameter("action");
        switch(action) {
            case OPEN:
                List<String> params = getParam(request, response, Arrays.asList("username", "postid"));
                handleOpen(request, response, params);
                request.getRequestDispatcher("/edit.jsp").forward(request, response);
                break;
            case PREVIEW:
                params = getParam(request, response, Arrays.asList("username", "postid", "title", "body"));
                handlePreview(request, response, params);
                request.getRequestDispatcher("/preview.jsp").forward(request, response);
                break;
            case LIST:
                params = getParam(request, response, Arrays.asList("username"));
                handleList(request, response, params);
                request.getRequestDispatcher("/list.jsp").forward(request, response);
                break;
            case SAVE:
                params = getParam(request, response, Arrays.asList("username", "postid", "title", "body"));
                handleSave(request, response, params);
                handleList(request, response, params);
                request.getRequestDispatcher("/list.jsp").forward(request, response);
                break;
            case DELETE:
                params = getParam(request, response, Arrays.asList("username", "postid"));
                handleDelete(request, response, params);
                handleList(request, response, params);
                request.getRequestDispatcher("/list.jsp").forward(request, response);
                break;
            default:
                handleInvalidReq(request, response, "Invalid action via POST method!");
                break;
        }
    }

    public void handleOpen(HttpServletRequest request, HttpServletResponse response, List<String> paramList) 
        throws ServletException, IOException
    {
        String username = paramList.get(0);
        int postid;
        String title = (request.getParameter("title") == null) ? "" : request.getParameter("title");
        String body = (request.getParameter("body") == null) ? "" : request.getParameter("body");
        Connection con = null;
        PreparedStatement ps = null;
        ResultSet rs = null;

        try {
            // Connect to database
            postid = Integer.parseInt(paramList.get(1));
            DBConnection dbc = new DBConnection();
            con = dbc.getConnection();
            // Check if (username, postid) exists
            ps = con.prepareStatement(
                "SELECT username, postid FROM Posts WHERE username=? AND postid=?"
            );
            ps.setString(1, username);
            ps.setInt(2, postid);
            rs = ps.executeQuery();
            if (rs.next()) {    // (username, postid) exists
                // Retrieve title and body from database
                ps = con.prepareStatement(
                    "SELECT title, body FROM Posts WHERE username=? AND postid=?"
                );
                ps.setString(1, username);
                ps.setInt(2, postid);
                rs = ps.executeQuery();
                // Reassign title and body with those in database
                if (rs.next()) {
                    title = rs.getString("title");
                    body = rs.getString("body");
                }
            }
            // Set attributes to be used by jsp page
            request.setAttribute("username", username);
            request.setAttribute("postid", postid);
            request.setAttribute("title", title);
            request.setAttribute("body", body);

        } catch (NumberFormatException e) {
            handleInvalidReq(request, response, "Postid is not integer!");
        } catch (ClassNotFoundException e) {
            throw new ServletException("Class not found error!");
        } catch (SQLException e) {
            throw new ServletException("Database connection error!");
        } finally {
            try { rs.close(); } catch (Exception e) { /* ignored */ }
            try { ps.close(); } catch (Exception e) { /* ignored */ }
            try { con.close(); } catch (Exception e) { /* ignored */ }
        }
    }

    public void handlePreview(HttpServletRequest request, HttpServletResponse response, List<String> paramList) 
        throws ServletException, IOException
    {
        String username = paramList.get(0);
        int postid;
        String title = paramList.get(2);
        String body = paramList.get(3);
        try {
            postid = Integer.parseInt(paramList.get(1));
            request.setAttribute("postid", postid);
        } catch (NumberFormatException e) {
            handleInvalidReq(request, response, "Postid is not integer!");
        }
        // Converting Markdown to HTML
        Parser parser = Parser.builder().build();
        Node parsedTitle = parser.parse(title);
        Node parsedBody = parser.parse(body);
        HtmlRenderer renderer = HtmlRenderer.builder().build();
        String renderedTitle = renderer.render(parsedTitle);
        String renderedBody = renderer.render(parsedBody);
        // Set attributes to be used by jsp
        request.setAttribute("username", username);
        request.setAttribute("title", Escaping.escapeHtml(title, true));
        request.setAttribute("body", Escaping.escapeHtml(body, true));
        request.setAttribute("renderedTitle", renderedTitle);
        request.setAttribute("renderedBody", renderedBody);
    }

    public void handleList(HttpServletRequest request, HttpServletResponse response, List<String> paramList) 
        throws ServletException, IOException
    {
        String username = paramList.get(0);
        request.setAttribute("username", username);
        Connection con = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            // Connect to database
            DBConnection dbc = new DBConnection();
            con = dbc.getConnection();
            // Check database whether the user has post(s)
            ps = con.prepareStatement(
                "SELECT postid, title, created, modified FROM Posts WHERE username=?"
            );
            ps.setString(1, username);
            rs = ps.executeQuery();
            List<Object> listData = new ArrayList<Object>();
            if (rs.next()) {  // This user has post(s)
                do {
                    // Retrieve the post(s)
                    listData.add(rs.getInt("postid"));
                    listData.add(rs.getString("title"));
                    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                    listData.add(sdf.format(rs.getTimestamp("created")));
                    listData.add(sdf.format(rs.getTimestamp("modified")));
                } while (rs.next());
                request.setAttribute("listdata", listData);
            }
        } catch (ClassNotFoundException e) {
            throw new ServletException("Class not found error!");
        } catch (SQLException e) {
            throw new ServletException("Database connection error!");
        } finally {
            try { rs.close(); } catch (Exception e) { /* ignored */ }
            try { ps.close(); } catch (Exception e) { /* ignored */ }
            try { con.close(); } catch (Exception e) { /* ignored */ }
        }
    }

    public void handleSave(HttpServletRequest request, HttpServletResponse response, List<String> paramList) 
        throws ServletException, IOException
    {
        String username = paramList.get(0);
        int postid;
        String title = paramList.get(2);
        String body = paramList.get(3);
        Connection con = null;
        PreparedStatement ps = null;
        ResultSet rs = null;

        try {
            postid = Integer.parseInt(paramList.get(1));
            // Connect to database
            DBConnection dbc = new DBConnection();
            con = dbc.getConnection();
            if (postid > 0) {
                // Check if (username, postid) exists otherwise do nothing
                ps = con.prepareStatement(
                    "SELECT username, postid FROM Posts WHERE username=? AND postid=?"
                );
                ps.setString(1, username);
                ps.setInt(2, postid);
                rs = ps.executeQuery();
                if (rs.next()) {    // (username, postid) exists
                    // Update existing entry with new title, body, and modified timestamp
                    ps = con.prepareStatement(
                        "UPDATE Posts SET title=?, body=?, modified=? WHERE username=? AND postid=?"
                    );
                    ps.setString(1, title);
                    ps.setString(2, body);
                    ps.setTimestamp(3, getTimestamp());
                    ps.setString(4, username);
                    ps.setInt(5, postid);
                    ps.executeUpdate();
                }
            }
            else {  // postid <= 0
                // Assign new postid
                ps = con.prepareStatement(
                    "SELECT MAX(postid) FROM Posts WHERE username=?"
                );
                ps.setString(1, username);
                rs = ps.executeQuery();
                postid = (rs.next()) ? rs.getInt(1)+1 : FIRST_POSTID;
                // Save the new post
                java.sql.Timestamp now = getTimestamp();
                ps = con.prepareStatement(
                    "INSERT INTO Posts VALUES (?, ?, ?, ?, ?, ?)"
                );
                ps.setString(1, username);
                ps.setInt(2, postid);
                ps.setString(3, title);
                ps.setString(4, body);
                ps.setTimestamp(5, now);
                ps.setTimestamp(6, now);
                ps.executeUpdate();
            }
        } catch (NumberFormatException e) {
            handleInvalidReq(request, response, "Postid is not integer!");
        } catch (ClassNotFoundException e) {
            throw new ServletException("Class not found error!");
        } catch (SQLException e) {
            throw new ServletException("Database connection error!");
        } finally {
            try { rs.close(); } catch (Exception e) { /* ignored */ }
            try { ps.close(); } catch (Exception e) { /* ignored */ }
            try { con.close(); } catch (Exception e) { /* ignored */ }
        }
    }

    public void handleDelete(HttpServletRequest request, HttpServletResponse response, List<String> paramList) 
        throws ServletException, IOException
    {
        String username = paramList.get(0);
        int postid;
        Connection con = null;
        PreparedStatement ps = null;
        try {
            postid = Integer.parseInt(paramList.get(1));
            // Connect to database
            DBConnection dbc = new DBConnection();
            con = dbc.getConnection();
            // Prepare DELETE statement
            ps = con.prepareStatement(
                "DELETE FROM Posts WHERE username=? AND postid=?"
            );
            ps.setString(1, username);
            ps.setInt(2, postid);
            ps.executeUpdate();

        } catch (NumberFormatException e) {
            handleInvalidReq(request, response, "Postid is not integer!");
        } catch (ClassNotFoundException e) {
            throw new ServletException("Class not found error!");
        } catch (SQLException e) {
            throw new ServletException("Database connection error!");
        } finally {
            try { ps.close(); } catch (Exception e) { /* ignored */ }
            try { con.close(); } catch (Exception e) { /* ignored */ }
        }
    }

    public List<String> getParam(HttpServletRequest request, HttpServletResponse response, List<String> paramList)
        throws ServletException, IOException
    {
        List<String> output = new ArrayList<String>();
        for (String param : paramList) {
            if (request.getParameter(param) == null)
                handleInvalidReq(request, response, String.format("Missing \"%s\"!", param));
            output.add(request.getParameter(param));
        }
        return output;
    }

    public void handleInvalidReq(HttpServletRequest request, HttpServletResponse response, String errMsg)
        throws ServletException, IOException
    {
        request.setAttribute("action", request.getParameter("action"));
        request.setAttribute("username", request.getParameter("username"));
        request.setAttribute("postid", request.getParameter("postid"));
        request.setAttribute("title", request.getParameter("title"));
        request.setAttribute("body", request.getParameter("body"));
        request.setAttribute("err", errMsg);
        request.getRequestDispatcher("/invalid.jsp").forward(request, response);;
    }

    private java.sql.Timestamp getTimestamp() {
        Date now = new Date();
        return new java.sql.Timestamp(now.getTime());
    }
}

