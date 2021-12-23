<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*, java.util.*,java.sql.*" %>
<%@ page import="java.io.*, java.util.*,java.sql.*" %>
<%@ page import="javax.crypto.SecretKeyFactory,javax.crypto.spec.PBEKeySpec,java.security.NoSuchAlgorithmException,java.security.SecureRandom" %>
<%@ page import="java.security.spec.InvalidKeySpecException,java.util.Arrays,java.util.Base64,java.util.Random" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/levelselect.css">
        <script src="../js/password.js"></script>
    <title>Sign Up</title>
</head>
<body class="background1">
    <div class="title">
        <h1>Sign Up</h1>
    </div>
	<div>
		<form method="post" class="formformat" id="loginForm" action="" >
			<fieldset>
				<legend>User Information</legend><br>
				<p>
				  <label for="username">User Name:</label><br>
				  <input id="username" name="username" type="text" />				 
				</p><br><br>
				<p>
					<label for="passwd">Password:</label>
					<span id="StrengthDisp" class="badge displayBadge">Weak</span><br> 
					<input id="passwd" name="passwd" type="password" />
				</p><br><br>
				<p>
					<label for="repasswd">Re-enter:</label><br> 
					<input id="repasswd" name="repasswd" type="password" />
				</p><br><br>
				<p>
					<input id="showpasswd" type="checkbox" onclick="myFunction()" />
					<label for="showpasswd">Show Password</label>
				</p><br>
				<p>
					<%
					/*
					static final Random RANDOM = new SecureRandom();

			        public String getSalt()
			        {
			            byte[] saltArray = new byte[16];
			            RANDOM.nextBytes(saltArray);
			            return Base64.getEncoder().encodeToString(saltArray);
			        }

			        public String setHashedPassword(String password, String salt)
			        {
			            char[] passwordArray = password.toCharArray(); //converts string to array of char
			            PBEKeySpec spec = new PBEKeySpec(passwordArray, Base64.getDecoder().decode(salt), 10000, 256);
			            Arrays.fill(passwordArray, Character.MIN_VALUE);
			            try
			            {
			                SecretKeyFactory skf = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
			                return Base64.getEncoder().encodeToString(skf.generateSecret(spec).getEncoded());
			            }
			            catch (NoSuchAlgorithmException | InvalidKeySpecException e)
			            {
			                throw new AssertionError("Error trying to hash, not complete: " + e.getMessage(), e);
			            }
			            finally
			            {
			                spec.clearPassword();
			            }
			        }
			        */
					
					
					String connectionURL = "jdbc:mysql://127.0.0.1:3306/";
					String database = "marcodb";
					Connection conn = null;
					ResultSet resultSet = null;
					PreparedStatement  stmt = null;
					String btLogin = request.getParameter("login");
					String userNm = request.getParameter("username");
					String passWd = request.getParameter("passwd");
					String rePassWd = request.getParameter("repasswd");
					
					if ("Sign Up".equals(btLogin)) {
						if(userNm==null && passWd==null){
							// first time load, do nothing
						} else if (userNm!=null && userNm.equals("")){
							%><p style="color:red">Please enter Username!!!</p><%
						} else if (passWd!=null && passWd.equals("")){
							%><p style="color:red">Please enter Password!!!</p><%
						} else if (!passWd.equals(rePassWd)){
							%><p style="color:red">Password is not matching!!!</p><%
						} else {
												
							try {
								String sqlQuery = "INSERT INTO gameuser (uName,passwd) VALUES (?, ?);";
										
								Class.forName("com.mysql.jdbc.Driver");
								conn = DriverManager.getConnection(connectionURL+database, "se319", "password");
								stmt = conn.prepareStatement(sqlQuery);
								stmt.setString(1, userNm);
								stmt.setString(2, passWd);
								stmt.execute();
								
								//sign-up success
								%><p style="color:green">Sign Up Success!!!</p><%
								
								// re-direct to login
								String redirectURL = "login.jsp";
								response.sendRedirect(redirectURL);
							} catch (Exception e) {
								// TODO Auto-generated catch block
								%><p style="color:red">Sign up error. Check your username and password!!!</p><%
								System.out.println("Error with query table: "+ e.getMessage());
								e.printStackTrace();
							} finally {
								conn.close();
							}
						}
					}
					%>
					<div class="container"><input type="submit" id="login" name="login" value="Sign Up" /></div>
					<div class="container"><input type="reset" value="Clear" /></div>
				</p>
			</fieldset>
		</form>
	</div>
    <div class="back">
		<a href="../jsp/home.jsp"><button>Main Menu</button></a>
	</div>    
</body>
</html>