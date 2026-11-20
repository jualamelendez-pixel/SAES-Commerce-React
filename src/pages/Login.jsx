
/*
  SAES COMMERCE
  Módulo: Inicio de sesión
  Descripción: Pantalla de acceso al sistema.
*/
import '../styles/Login.css';
function Login() {
  return (
    <main className="login-container">

      {/* Panel de presentación del sistema */}
      <section className="login-info">
        <h1>SAES COMMERCE</h1>

        <p>
          Sistema de gestión de pedidos,
          inventario y despachos.
        </p>
      </section>

      {/* Formulario de inicio de sesión */}
      <section className="login-form-container">
        <h2>Iniciar sesión</h2>

        <p>Ingresa tus datos para continuar</p>

        <form>
          {/* Campo de correo electrónico */}
          <label htmlFor="email">
            Correo electrónico
          </label>

          <input
            type="email"
            id="email"
            placeholder="Ingresa tu correo"
            required
          />

          {/* Campo de contraseña */}
          <label htmlFor="password">
            Contraseña
          </label>

          <input
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            required
          />

          {/* Botón de acceso */}
          <button type="submit">
            Ingresar
          </button>
        </form>
      </section>

    </main>
  );
}

// Exportamos el componente para utilizarlo en la aplicación.
export default Login;
