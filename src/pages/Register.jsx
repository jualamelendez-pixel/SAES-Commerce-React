/*
  SAES COMMERCE
  Módulo: Registro de usuarios.
  Descripción: Permite registrar nuevos usuarios.
*/

import UserForm from '../components/UserForm';
import '../styles/Register.css';

function Register({ onRegister }) {

  return (
    <main className="register-container">

      {/* Encabezado del sistema */}
      <header className="register-header">
        <h1>SAES COMMERCE</h1>
        <p>
          Sistema de gestión de pedidos, inventario y despachos
        </p>
      </header>

      {/* Formulario de registro */}
      <section className="register-form-container">

        <h2>Registro de usuarios</h2>
        <p>Ingresa la información para crear un nuevo usuario</p>

        {/* Formulario reutilizable */}
        <UserForm onRegister={onRegister} />

      </section>

    </main>
  );
}

export default Register;