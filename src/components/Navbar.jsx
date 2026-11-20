import '../styles/Navbar.css';
/*
  SAES COMMERCE
  Componente: Barra de navegación
  Descripción: Muestra las opciones principales del sistema.
*/

function Navbar({ onNavigate }) {

  return (
    <nav className="navbar">

      {/* Nombre del sistema */}
      <div className="navbar-brand">
        <h2>SAES COMMERCE</h2>
      </div>

      {/* Opciones de navegación */}
      <div className="navbar-links">

        <button onClick={() => onNavigate("dashboard")}>
          Inicio
        </button>

        <button onClick={() => onNavigate("users")}>
          Usuarios
        </button>

        <button onClick={() => onNavigate("register")}>
          Registrar usuario
        </button>

        <button onClick={() => onNavigate("login")}>
          Cerrar sesión
        </button>

      </div>

    </nav>
  );
}

// Exportamos el componente para utilizarlo en otras pantallas.
export default Navbar;