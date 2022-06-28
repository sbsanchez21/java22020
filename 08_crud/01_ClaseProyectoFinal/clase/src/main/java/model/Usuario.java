package model;

import java.sql.Blob;

public class Usuario {
    private Integer idUsuario;
    private String usuario;
    private String clave;
    private Blob nombreYApellido;
    
	public Usuario(Integer idUsuario, String usuario, String clave, Blob nombreYApellido) {
		super();
		this.idUsuario = idUsuario;
		this.usuario = usuario;
		this.clave = clave;
		this.nombreYApellido = nombreYApellido;
	}
	
	public Usuario(String usuario, String clave) {
		super();
		this.usuario = usuario;
		this.clave = clave;

	}
	

	public Integer getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Integer idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getClave() {
		return clave;
	}

	public void setClave(String clave) {
		this.clave = clave;
	}

	public Blob getNombreYApellido() {
		return nombreYApellido;
	}

	public void setNombreYApellido(Blob nombreYApellido) {
		this.nombreYApellido = nombreYApellido;
	}
    
    
}
