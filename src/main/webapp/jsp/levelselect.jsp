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
    <title>Level Select</title>
</head>
<body class="background2">
	<%
	if(session.getAttribute("username") != null){
		String userNm = session.getAttribute("username").toString();
		if (userNm != null && !userNm.equals("")){
			%><div class="user">User: <%=userNm %></div><%
		}
	}
	%>
    <div class="title">
        <h1>Level</h1>
    </div>
    <div class="container">
        <div class="card">
            <div class="card-image">
				<h1>Level 1</h1>
				<div class="selector">
					<button onclick="location.href = '../jsp/Level1.jsp';">SELECT</button>
				</div>
            </div>

            <div class="card-footer">
			<%
				String connectionURL = "jdbc:mysql://127.0.0.1:3306/";
				String database = "marcodb";
				Connection connection = null;
				ResultSet resultSet = null;
				Statement statement = null;
						
				try {			
					Class.forName("com.mysql.jdbc.Driver");
					connection = DriverManager.getConnection(connectionURL+database, "se319", "password");
					statement = connection.createStatement();
					
					String sqlQuery = "select * from gamescore "
									+ "where glevel = 1 order by gscore desc limit 1;";
					
					resultSet = statement.executeQuery(sqlQuery);
					while(resultSet.next()){
					%>
					<p>Highest Score: <%=resultSet.getInt("gscore")%></p>
					<%
					}
					
				} catch (ClassNotFoundException | SQLException e) {
					// TODO Auto-generated catch block
					System.out.println("Error with query table: "+ e.getMessage());
					e.printStackTrace();
				}
			%>
            </div>
        </div>

        <div class="card">
            <div class="card-image">
                <h1>Level 2</h1>
				<div class="selector">
					<button onclick="location.href = '../jsp/Level2.jsp';">SELECT</button>
				</div>
            </div>

            <div class="card-footer">
            <%
            	try {					
					String sqlQuery = "select * from gamescore "
									+ "where glevel = 2 order by gscore desc limit 1;";
				
					resultSet = statement.executeQuery(sqlQuery);
					while(resultSet.next()){
					%>
					<p>Highest Score: <%=resultSet.getInt("gscore")%></p>
					<%
					}
				} catch (Exception e) {
					// TODO Auto-generated catch block
					System.out.println("Error with query table: "+ e.getMessage());
					e.printStackTrace();
				}
            %>
            </div>
        </div>

        <div class="card">
            <div class="card-image">
                <h1>Level 3</h1>
				<div class="selector">
					<button onclick="location.href = '../jsp/level3.jsp';">SELECT</button>
				</div>
            </div>

            <div class="card-footer">
            <%
            	try {					
					String sqlQuery = "select * from gamescore "
									+ "where glevel = 3 order by gscore desc limit 1;";
				
					resultSet = statement.executeQuery(sqlQuery);
					while(resultSet.next()){
					%>
					<p>Highest Score: <%=resultSet.getInt("gscore")%></p>
					<%
					}
				} catch (Exception e) {
					// TODO Auto-generated catch block
					System.out.println("Error with query table: "+ e.getMessage());
					e.printStackTrace();
				} finally {
					resultSet.close();
					statement.close();
					connection.close();
				}
            %>
            </div>

        </div>
    </div>
	
	<div class="back">
		<a href="./home.jsp"><button>MAIN MENU</button></a>
	</div>
    
</body>
</html>