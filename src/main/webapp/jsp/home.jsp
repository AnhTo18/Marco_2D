<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*, java.util.*,java.sql.*" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/levelselect.css">
    <title>Home</title>
</head>
<body class="background1">
	<%
	if(session.getAttribute("username") != null){
		String userNm = session.getAttribute("username").toString();
		if (userNm != null && !userNm.equals("")){
			%><div class="user">User: <%=userNm %></div><%
		}
	}
	%>
    <div class="title">
        <h1>Marco</h1>
    </div>
    <div class="container">
        <div class="card">
            <div class="card-image-2">
				<h1>Level Select</h1>
				<div class="selector">
					<%if(session.getAttribute("username") != null){ %>
						<button onclick="location.href = '../jsp/levelselect.jsp';">SELECT</button>
					<%} %>
				</div>
            </div>
        </div>

        <div class="card">
            <div class="card-image-2">
                <h1>Characters</h1>
				<div class="selector">
					<%if(session.getAttribute("username") != null){ %>
						<button onclick="location.href = '../jsp/charactersselect.jsp';">SELECT</button>
					<%} %>
				</div>
            </div>
        </div>

        <div class="card">
            <div class="card-image-2">
                <h1>Leaderboard</h1>
				<div class="selector">
					<%if(session.getAttribute("username") != null){ %>
						<button onclick="location.href = '../jsp/leaderboard.jsp';">SELECT</button>
					<%} %>
				</div>
            </div>
        </div>
    </div>
    <div class="back">
		<a href="../jsp/login.jsp"><button>Login</button></a>
	</div>    
</body>
</html>