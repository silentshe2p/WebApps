<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
    <title>Post Edit</title>
    <link href="<c:url value="/css/editor.css" />" rel="stylesheet">
</head>

<body>
    <form action="${pageContext.request.contextPath}/post" method="post">
        <div class="nav act">
            <a class="pagename">Post Edit</a>
            <button class="green" type="submit" name="action" value="save">Save</button>
            <button class="red" type="submit" name="action" value="delete">Delete</button>
            <button class="yellow" type="submit" name="action" value="preview">Preview</button>
            <button type="submit" name="action" value="list">Close</button>
        </div>

        <input type="hidden" name="username" value="${username}">
        <input type="hidden" name="postid" value="${postid}">

        <div class="title">
            Title: <input id="title" type="text" name="title" value="${title}">
        </div>
        <div class="body">
            <textarea id="body" name="body" placeholder="Post content">${body}</textarea>
        </div>
    </form>
</body>
</html>
