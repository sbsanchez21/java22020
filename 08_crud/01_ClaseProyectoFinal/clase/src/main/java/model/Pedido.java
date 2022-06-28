package model;

public class Pedido {
    private Integer idPedido;
    private String nombre;
    private String apellido;
    private String usuario;
    private String mail;
    private String lugarEntrega;
    private Integer localidad;
    private Integer provincia;
    private String codPostal;
    private String formaDePago;
    private String tarjTitular;
    private Integer tarjNumero;
    private String tarjVto;
    private Integer tarjClave;
    
	public Pedido(String nombre, String apellido, String usuario, String mail, String lugarEntrega,
			Integer localidad, Integer provincia, String codPostal, String formaDePago, String tarjTitular,
			Integer tarjNumero, String tarjVto, Integer tarjClave) {
		super();
		this.nombre = nombre;
		this.apellido = apellido;
		this.usuario = usuario;
		this.mail = mail;
		this.lugarEntrega = lugarEntrega;
		this.localidad = localidad;
		this.provincia = provincia;
		this.codPostal = codPostal;
		this.formaDePago = formaDePago;
		this.tarjTitular = tarjTitular;
		this.tarjNumero = tarjNumero;
		this.tarjVto = tarjVto;
		this.tarjClave = tarjClave;
	}
	
	

	public Pedido(Integer idPedido, String nombre, String apellido, String usuario, String mail, String lugarEntrega,
			Integer localidad, Integer provincia, String codPostal, String formaDePago, String tarjTitular,
			Integer tarjNumero, String tarjVto, Integer tarjClave) {
		super();
		this.idPedido = idPedido;
		this.nombre = nombre;
		this.apellido = apellido;
		this.usuario = usuario;
		this.mail = mail;
		this.lugarEntrega = lugarEntrega;
		this.localidad = localidad;
		this.provincia = provincia;
		this.codPostal = codPostal;
		this.formaDePago = formaDePago;
		this.tarjTitular = tarjTitular;
		this.tarjNumero = tarjNumero;
		this.tarjVto = tarjVto;
		this.tarjClave = tarjClave;
	}



	public Integer getIdPedido() {
		return idPedido;
	}

	public void setIdPedido(Integer idPedido) {
		this.idPedido = idPedido;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getLugarEntrega() {
		return lugarEntrega;
	}

	public void setLugarEntrega(String lugarEntrega) {
		this.lugarEntrega = lugarEntrega;
	}

	public Integer getLocalidad() {
		return localidad;
	}

	public void setLocalidad(Integer localidad) {
		this.localidad = localidad;
	}

	public Integer getProvincia() {
		return provincia;
	}

	public void setProvincia(Integer provincia) {
		this.provincia = provincia;
	}

	public String getCodPostal() {
		return codPostal;
	}

	public void setCodPostal(String codPostal) {
		this.codPostal = codPostal;
	}

	public String getFormaDePago() {
		return formaDePago;
	}

	public void setFormaDePago(String formaDePago) {
		this.formaDePago = formaDePago;
	}

	public String getTarjTitular() {
		return tarjTitular;
	}

	public void setTarjTitular(String tarjTitular) {
		this.tarjTitular = tarjTitular;
	}

	public Integer getTarjNumero() {
		return tarjNumero;
	}

	public void setTarjNumero(Integer tarjNumero) {
		this.tarjNumero = tarjNumero;
	}

	public String getTarjVto() {
		return tarjVto;
	}

	public void setTarjVto(String tarjVto) {
		this.tarjVto = tarjVto;
	}

	public Integer getTarjClave() {
		return tarjClave;
	}

	public void setTarjClave(Integer tarjClave) {
		this.tarjClave = tarjClave;
	}

    
}
