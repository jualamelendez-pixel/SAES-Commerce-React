/*
  SAES COMMERCE
  Módulo: Gestión de usuarios.
  Descripción: Permite visualizar los usuarios registrados.
*/

import '../styles/Users.css';

function Users({ users = [] }) {

  return (
    <main className="users-container">

      {/* Encabezado de la pantalla */}
      <header>
        <h1>SAES COMMERCE</h1>
        <p>Gestión de usuarios del sistema</p>
      </header>

      {/* Contenido principal */}
      <section className="users-content">

        <h2>Usuarios registrados</h2>
        <p>Consulta la información de los usuarios del sistema.</p>

        {/* Tabla de usuarios */}
        <div className="table-container">
          <table>

            <thead>
              <tr>
                <th>Nombre</th>
                <th>Identificación</th>
                <th>Correo electrónico</th>
                <th>Rol</th>
                <th>Estado</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.document}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.status}</td>
                </tr>
              ))}

              {/* Mensaje cuando no hay usuarios */}
              {users.length === 0 && (
                <tr>
                  <td colSpan="5">
                    No hay usuarios registrados.
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>

      </section>

    </main>
  );
}

export default Users;