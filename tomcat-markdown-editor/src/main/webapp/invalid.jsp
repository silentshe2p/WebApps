<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
    <title>Invalid Request</title>
</head>
<body>
    <h2>Request Details</h2>
    <b>action:</b> ${action}<br>
    <b>username:</b> ${username}<br>
    <b>postid:</b> ${postid}<br>
    <b>title:</b> ${title}<br>
    <b>body:</b> ${body}<br>

    <h2>Reason of Error</h2>
    ${err}
</body>
</html>