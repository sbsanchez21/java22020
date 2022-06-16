package dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import dataBase.ConexionDB;

public class MateriaDAO {
	
	public void getAllMaterias() throws SQLException {
		ConexionDB conMysql = new ConexionDB();
		Connection conn = conMysql.establecerConexion();
		Statement st= conn.createStatement();
		
		ResultSet rs= st.executeQuery("SELECT * FROM materias ORDER by nombre");
		
	}

}
