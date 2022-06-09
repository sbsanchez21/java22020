<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

	<p>Listado alumnos jsp</p>
	
	<table>
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


</body>
</html>