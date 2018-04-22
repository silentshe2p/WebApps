<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/fmt" prefix = "fmt" %>

<!DOCTYPE html>
<html>
<head>
    <title>Post List</title>
    <link href="<c:url value="/css/editor.css" />" rel="stylesheet">
</head>
<body>
    <form action="${pageContext.request.contextPath}/post" method="post">
        <div class="nav act">
            <a class="pagename">Post List</a>
            <input type="hidden" name="username" value="${username}">
            <input type="hidden" name="postid" value="0">
            <button class="green" type="submit" name="action" value="open">New Post</button>
        </div>
    </form>        

    <div class="list act">            
        <c:if test="${not empty listdata}">
            <table>
                <tr class="header"><th>Title</th><th>Created</th><th>Modified</th></tr>
                <c:forEach var="field" items="${listdata}" varStatus="loop">
                    <c:choose>
                        <c:when test="${(loop.count-1)%4==0}">
                            <tr class="content">
                                <form action="${pageContext.request.contextPath}/post" method="post">
                                    <input type="hidden" name="username" value="${username}">
                                    <c:set var="pid" value="${field}"/>
                                    <fmt:setLocale value="en-US"/>
                                    <fmt:parseNumber var="postid" value="${pid}" integerOnly="true"/>
                                    <input type="hidden" name="postid" value="${postid}">
                        </c:when>
                        <c:otherwise>
                            <td>${field}</td>
                        </c:otherwise>
                    </c:choose>

                    <c:if test="${loop.count%4==0}">
                            <td class="lact">
                                <button class="yellow" type="submit" name="action" value="open">Open</button>
                                <button class="red" type="sumbit" name="action" value="delete">Delete</button>
                            </td>
                            </form>
                        </tr><tr>
                    </c:if>
                </c:forEach>
            </table>
        </c:if>
    </div>
</body>
</html>