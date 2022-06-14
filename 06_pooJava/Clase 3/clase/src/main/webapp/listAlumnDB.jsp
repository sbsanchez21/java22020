<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%@page import="dataBase.ConexionDB"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<title>Insert title here</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">	
</head>
<body>
	<div class="container">

	<p>Listado alumnos jsp</p>
	
		
	<table class="table">
		<thead class="table-dark" >
			<tr>
				<th>#ID</th>
				<th>Nombre</th>
				<th>Apellido</th>
				<th>DNI</th>
			</tr>
		</thead>
		
		<tbody>
	
		<%
		//conectamos a db
		ConexionDB conexionDB=new ConexionDB();
		Connection conn=conexionDB.establecerConexion();
		Statement st=conn.createStatement();
		ResultSet rs= st.executeQuery("SELECT * FROM alumnos");
		
		while(rs.next()){
			out.println("<tr>");

			//id
			out.println("<td>");
			out.println(rs.getInt("id"));
			out.println("</td>");
			
			//nombre
			out.println("<td>");
			out.println(rs.getString("nombre"));
			out.println("</td>");

			out.println("<td>");
			out.println(rs.getString("apellido"));
			out.println("</td>");
			
			out.println("<td>");
			out.println(rs.getString("dni"));
			out.println("</td>");			
			out.println("</tr>");			
			
		}
			
		%>		
		</tbody>
	</table>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>

</body>
</html>