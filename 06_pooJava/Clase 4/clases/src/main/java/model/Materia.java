package model;

public class Materia {
	private String nombre;
	private String descripcion;
	private Integer idProfesor;
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		//validar que tenga permisos
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Integer getIdProfesor() {
		return idProfesor;
	}
	public void setIdProfesor(Integer idProfesor) {
		this.idProfesor = idProfesor;
	}




	private void asignarProfesor() {
		// TODO asigna profesor a la materia

	}
	

}
