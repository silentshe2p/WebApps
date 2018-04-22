package myutils;

import java.sql.*;

public class DBConnection {
    private Connection connection;

    public DBConnection() throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.jdbc.Driver");
        this.connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/CS144", "cs144", "");
    }

    public Connection getConnection() {
        return this.connection;
    }
}