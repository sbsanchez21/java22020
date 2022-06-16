<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<p>Hola mundo html</p>
	
	<% 
	// próximas clases conectarme con la DB
	// con sql traer todos los alumnos
	// colocarlos en un array y mostrarlo en una tabla
	
	out.println("Hola jsp");
	
	String msj=new String("<div style='color:blue'>hola jsp string</div>");
	out.println(msj);
	
	%>


</body>
</html>