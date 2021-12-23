<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*, java.util.*,java.sql.*" %>
<!DOCTYPE html>
<html lang="en">
    <head>
        <script src="../js/Level1.js"></script>
    </head>
    <body onload="initLevel()">
    	<%
		if(session.getAttribute("username") != null){
			String userNm = session.getAttribute("username").toString();
			if (userNm != null && !userNm.equals("")){
				%><div class="user">User: <%=userNm %></div><%
			}
		}
		%>
        <div id="timer"></div><div id="score"></div><br><br>
        <canvas id="canvas" width="1000" height="500" style="border:1px solid #500000"></canvas>
        <p id="savescore" style="display:none;"></p>
    </body>
</html>