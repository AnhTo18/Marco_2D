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
    <script src="../js/password.js"></script>
    <title>Login</title>
</head>
<body class="background1">
    <div class="title">
        <h1>Login</h1>
    </div>
	<div>
		<form method="post" class="formformat" id="loginForm" action="" >
			<fieldset>
				<legend>Login Information</legend><br>
				<p>
				  <label for="username">User Name:</label><br>
				  <input id="username" name="username" type="text" />				 
				</p><br><br>
				<p>
					<label for="passwd">Password:</label><br> 
					<input id="passwd" name="passwd" type="password" />
				</p><br><br>
				<p>
					<input id="showpasswd" type="checkbox" onclick="myFunction()" />
					<label for="showpasswd">Show Password</label>
				</p><br>
				<p>
					<%
					String connectionURL = "jdbc:mysql://127.0.0.1:3306/";
					String database = "marcodb";
					Connection conn = null;
					ResultSet resultSet = null;
					PreparedStatement  stmt = null;
					String btLogin = request.getParameter("login");
					String userNm = request.getParameter("username");
					String passWd = request.getParameter("passwd");
					
					if ("Sign Up".equals(btLogin)) {
						
						// sign up for new account
						String redirectURL = "signup.jsp";
						response.sendRedirect(redirectURL);
					
					} else {
						
						if(userNm==null && passWd==null){
							// first time load, do nothing
						} else if (userNm!=null && userNm.equals("")){
							%><p style="color:red">Please enter Username!!!</p><%
						} else if (passWd!=null && passWd.equals("")){
							%><p style="color:red">Please enter Password!!!</p><%
						} else {
								// check login						
							try {
								String sqlQuery = "select * from gameuser where uName = ?;";
										
								Class.forName("com.mysql.jdbc.Driver");
								conn = DriverManager.getConnection(connectionURL+database, "se319", "password");
								stmt = conn.prepareStatement(sqlQuery);
								stmt.setString(1, userNm);
								resultSet = stmt.executeQuery();
								if(resultSet.next()){
									// user found, check password
									if(resultSet.getString("passwd").equals(passWd)){
										//login success
										session.setAttribute("username", userNm);
										String redirectURL = "home.jsp";
										response.sendRedirect(redirectURL);
									} else {
										// wrong password
										%><p style="color:red">Wrong Password!!!</p><%
									}
								} else {
									// wrong username
									%><p style="color:red">Wrong Username!!!</p><%
								}
							} catch (Exception e) {
								// TODO Auto-generated catch block
								System.out.println("Error with query table: "+ e.getMessage());
								e.printStackTrace();
							} finally {
								resultSet.close();
								stmt.close();
								conn.close();
							}
						}
					}
					%>
					<div class="container"><input type="submit" id="login" name="login" value="Login" /></div>
					<div class="container"><input type="reset" value="Clear" /></div>
					<div class="container"><input type="submit" id="create" name="login" value="Sign Up" /></div>
				</p>
			</fieldset>
		</form>
	</div>
    <div class="back">
		<a href="../jsp/home.jsp"><button>Main Menu</button></a>
	</div>    
</body>
</html>