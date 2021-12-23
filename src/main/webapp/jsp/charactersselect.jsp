<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*, java.util.*,java.sql.*" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/charactersstyle.css">
    <title>Select Game Character</title>
</head>
<body>
	<%
	if(session.getAttribute("username") != null){
		String userNm = session.getAttribute("username").toString();
		if (userNm != null && !userNm.equals("")){
			%><div class="user">User: <%=userNm %></div><%
		}
	}
	%>
    <div class="title">
        <h1>Characters</h1>
    </div>
    <div class="container">
        <div class="card">
            <div class="card-image">
                <img src="../images/img1.png" alt="Character">
            </div>

            <div class="card-body">
                <span class="power">Default Power</span>
                <h2>Marco</h2>
                <p>Marco is a farmer who secretly in love with Princess Lily. Although he is an ordinary person, he is always willing to sacrifice everything to protect Princess Lily.</p>
            </div>

            <div class="card-footer">
                <div class="info">
                    <div class="value">500</div>
                    <div class="type">power</div>
                </div>
                <div class="info">
                    <div class="value">500</div>
                    <div class="type">speed</div>
                </div>
                <div class="info">
                    <div class="value">400</div>
                    <div class="type">luck</div>
                </div>
            </div>

            <div class="selector">
                <button>SELECT</button>
            </div>

        </div>

        <div class="card">
            <div class="card-image">
                <img src="../images/img2.png" alt="Character">
            </div>

            <div class="card-body">
                <span class="power">Speed Power</span>
                <h2>Flash</h2>
                <p>The Flash Knight is a close friend of Marco. He has been specially trained since childhood, so he has the ability to move very quickly as well as dodge enemy attacks.</p>
            </div>

            <div class="card-footer">
                <div class="info">
                    <div class="value">600</div>
                    <div class="type">power</div>
                </div>
                <div class="info">
                    <div class="value">800</div>
                    <div class="type">speed</div>
                </div>
                <div class="info">
                    <div class="value">700</div>
                    <div class="type">luck</div>
                </div>
            </div>
            <div class="selector">
                <button>SELECT</button>
            </div>

        </div>

        <div class="card">
            <div class="card-image">
                <img src="../images/img3.png" alt="Character">
            </div>

            <div class="card-body">
                <span class="power">Fire Power</span>
                <h2>Troy</h2>
                <p>Troy is Marco's best friend. He is a royal knight. He has the ability to shoot fire with extremely high heat to attack enemies. Always wanted to inherit his father's legend.</p>
            </div>

            <div class="card-footer">
                <div class="info">
                    <div class="value">800</div>
                    <div class="type">power</div>
                </div>
                <div class="info">
                    <div class="value">500</div>
                    <div class="type">speed</div>
                </div>
                <div class="info">
                    <div class="value">500</div>
                    <div class="type">luck</div>
                </div>
            </div>
            <div class="selector">
                <button>SELECT</button>
            </div>

        </div>
    </div>
	
	<div class="back">
		<a href="./home.jsp"><button>MAIN MENU</button></a>
	</div>
    
</body>
</html>