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

	<p>Listado alumnos jsp</p>
	
	<table class="table">
		<thead>
			<tr>
				<th>#ID</th>
				<th>Nombre</th>
			</tr>
		</thead>
		
		<tbody>
	
		<%
		//conectamos a db
		//traemos lista de alumnos y asignamos a un array
		List<String> listAlumnos = new ArrayList<String>();
		listAlumnos.add("Pedro");
		listAlumnos.add("Juan");
		listAlumnos.add("Rodrigo");
		listAlumnos.add("Romina");
		listAlumnos.add("Felipe");
		
			
		for(int i=0; i<listAlumnos.size(); i++) {
			out.println("<tr>");

			//id
			out.println("<td>");
			out.println(i);
			out.println("</td>");
			
			//nombre
			out.println("<td>");
			out.println(listAlumnos.get(i));
			out.println("</td>");
		
			out.println("</tr>");
		}
	
		
		%>		
		</tbody>
	</table>

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>

</body>
</html>