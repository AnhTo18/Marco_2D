<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*, java.util.*,java.sql.*" %>
<!DOCTYPE html>
<html lang="en">
	<style>
		body {background-color: #000000;
			font-family: Arial;
  			margin: 0;
			text-align: center;
		}
	</style>
	<head>
	</head>
	<canvas id="canvas"></canvas>
	<script src="../js/level3.js"></script>
	<body>
		<%
		if(session.getAttribute("username") != null){
			String userNm = session.getAttribute("username").toString();
			if (userNm != null && !userNm.equals("")){
				%><div class="user">User: <%=userNm %></div><%
			}
		}
		%>
		<p style="color:darkslategray;" id="timer"></p>
		<p style="color:darkslategray;" id="score"></p>
		<p id="savescore" style="display:none;"></p>
	</body>
</html>