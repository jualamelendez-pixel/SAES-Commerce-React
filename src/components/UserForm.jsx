import { useState } from 'react';
/*
  SAES COMMERCE
  Componente: Formulario reutilizable de usuarios.
*/

function UserForm({ onRegister }) {
      // Controla la visibilidad de las contraseñas
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    document: '',
    birthdate: '',
    email: '',
    role: '',
    password: '',
    confirmPassword: ''
  });

  // Actualiza los datos de cada campo
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Valida y envía el formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    const userData = {
      name: formData.name,
      lastname: formData.lastname,
      document: formData.document,
      birthdate: formData.birthdate,
      email: formData.email,
      role: formData.role
    };

    onRegister(userData);

    alert('Usuario registrado correctamente.');

    setFormData({
      name: '',
      lastname: '',
      document: '',
      birthdate: '',
      email: '',
      role: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="register-fields">

        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Apellido</label>
          <input id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="document">Identificación</label>
          <input id="document" name="document" value={formData.document} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="birthdate">Fecha de nacimiento</label>
          <input type="date" id="birthdate" name="birthdate" value={formData.birthdate} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="role">Rol del usuario</label>
          <select id="role" name="role" value={formData.role} onChange={handleChange} required>
            <option value="">Selecciona un rol</option>
            <option value="Administrador">Administrador</option>
            <option value="Producción">Producción</option>
            <option value="Inventario">Inventario</option>
            <option value="Despachos">Despachos</option>
            <option value="Comercial">Comercial</option>
          </select>
        </div>

       <div className="form-group">
  <label htmlFor="password">Contraseña</label>

  <div className="password-field">
    <input
      type={showPassword ? "text" : "password"}
      id="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      required
    />

    <button
      type="button"
      className="toggle-password"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? "Ocultar" : "Mostrar"}
    </button>
  </div>
</div>

        <div className="form-group">
  <label htmlFor="confirmPassword">Confirmar contraseña</label>

  <div className="password-field">
    <input
      type={showConfirmPassword ? "text" : "password"}
      id="confirmPassword"
      name="confirmPassword"
      value={formData.confirmPassword}
      onChange={handleChange}
      required
    />

    <button
      type="button"
      className="toggle-password"
      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    >
      {showConfirmPassword ? "Ocultar" : "Mostrar"}
    </button>
  </div>
</div>

      </div>

      <button type="submit">Registrar usuario</button>

    </form>
  );
}

export default UserForm;
// 