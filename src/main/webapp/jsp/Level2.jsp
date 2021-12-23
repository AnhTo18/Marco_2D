<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*, java.util.*,java.sql.*" %>
<!DOCTYPE html>
<html lang="en">
	<head>
	</head>
	<canvas id="canvas"></canvas>
	<script src="../js/level2.js"></script>
	<body>
		<%
		if(session.getAttribute("username") != null){
			String userNm = session.getAttribute("username").toString();
			if (userNm != null && !userNm.equals("")){
				%><div class="user">User: <%=userNm %></div><%
			}
		}
		%>
		<p id="savescore" name="savescore" value="00" style="display:none;"></p>
		<p id="timer"></p>
		<p id="score"></p>
		<form method="post" id="saveForm" action="" >
			<%
				String connectionURL = "jdbc:mysql://127.0.0.1:3306/";
				String database = "marcodb";
				Connection conn = null;
				ResultSet resultSet = null;
				PreparedStatement  stmt = null;
				String btMenu = request.getParameter("menu");
				String score = request.getParameter("savescore");
				String userNm = session.getAttribute("username").toString();
				
				System.out.println(score);
				
				if ("Main Menu".equals(btMenu)) {
														
					if (score != null){
						try {
							String sqlQuery = "INSERT INTO gamescore (gid,uName,glevel,gscore) VALUES (null,?,2,?);";
							
							Class.forName("com.mysql.jdbc.Driver");
							conn = DriverManager.getConnection(connectionURL+database, "se319", "password");
							stmt = conn.prepareStatement(sqlQuery);
							stmt.setString(1, userNm);
							stmt.setInt(2, Integer.parseInt(score));
							stmt.execute();
													
							// re-direct to home
							String redirectURL = "../jsp/home.jsp";
							response.sendRedirect(redirectURL);
						} catch (Exception e) {
							// TODO Auto-generated catch block
							System.out.println(e.getMessage());
							e.printStackTrace();
						} finally {
							conn.close();
						}
					} else {
						// re-direct to home
						String redirectURL = "../jsp/home.jsp";
						response.sendRedirect(redirectURL);
					}
				}
				
				if ("Restart".equals(btMenu)) {
					// re-direct to login
					String redirectURL = "../jsp/level2.jsp";
					response.sendRedirect(redirectURL);
				}
			%>
			<input type="submit" id="menu" name="menu" value="Main Menu" />
			<input type="submit" id="menu" name="restart" value="Restart" />
		</form>
	</body>
</html>