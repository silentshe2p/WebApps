<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
    <title>Post Preview</title>
    <link href="<c:url value="/css/editor.css" />" rel="stylesheet">
</head>
<body>
    <form action="${pageContext.request.contextPath}/post" method="post">
        <div class="nav act">
            <a class="pagename">Post Preview</a>
            <input type="hidden" name="username" value="${username}">
            <input type="hidden" name="postid" value="${postid}">
            <input type="hidden" name="title" value="${title}">
            <input type="hidden" name="body" value="${body}">
            <button class="yellow" type="submit" name="action" value="open">Close</button>
        </div>
    </form>
    <div class="preview">
        <h1>${renderedTitle}</h1>
        <div>${renderedBody}</div>
    </div>
</body>
</html>