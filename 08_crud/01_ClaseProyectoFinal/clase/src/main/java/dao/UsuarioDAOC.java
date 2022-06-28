package dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import dataBase.ConexionDB;

public class UsuarioDAOC {

	
	private void getUsuXID() {
		// TODO Auto-generated method stub

	}
	
	private void getUsuXNombre() {
		// TODO Auto-generated method stub

	}
	
	public Boolean validarUsuYPass(String usu, String pass) throws SQLException {
		ConexionDB conex = new ConexionDB();
		Connection conn= conex.establecerConexion();
		 
		Statement st = conn.createStatement();
		ResultSet rs = st.executeQuery("SELECT * FROM usuarios WHERE usuario='" + usu + "' AND clave='"+pass+"'");
		
		return rs.next();
		
//		if (rs.next()) {
//			return true;
//		} else {
//			return false;
//		}

		
	}
}
