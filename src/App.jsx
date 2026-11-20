/*
  SAES COMMERCE
  Componente principal de la aplicación.
  Controla la navegación y los usuarios del sistema.
*/

import { useState } from 'react';

import Login from './pages/Login';
import Register from './pages/Register';
import Users from './pages/Users';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

function App() {

  // Controla la pantalla visible
  const [currentPage, setCurrentPage] = useState('dashboard');

  // Lista inicial de usuarios de ejemplo
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Carlos Rodríguez',
      document: '1020304050',
      email: 'carlos@saes.com',
      role: 'Administrador',
      status: 'Activo'
    },
    {
      id: 2,
      name: 'Laura Martínez',
      document: '1020304051',
      email: 'laura@saes.com',
      role: 'Inventario',
      status: 'Activo'
    },
    {
      id: 3,
      name: 'Andrés Gómez',
      document: '1020304052',
      email: 'andres@saes.com',
      role: 'Despachos',
      status: 'Activo'
    }
  ]);

  // Cambia de pantalla
  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  // Agrega un nuevo usuario a la lista
  const handleAddUser = (userData) => {
    const newUser = {
      id: Date.now(),
      ...userData,
      name: `${userData.name} ${userData.lastname}`,
      status: 'Activo'
    };

    setUsers((previousUsers) => [
      ...previousUsers,
      newUser
    ]);

    setCurrentPage('users');
  };

  return (
    <>
      {/* Barra de navegación */}
      {currentPage !== 'login' && (
        <Navbar onNavigate={handleNavigate} />
      )}

      {/* Pantallas del sistema */}
      {currentPage === 'login' && <Login />}

      {currentPage === 'dashboard' && <Dashboard />}

      {currentPage === 'users' && (
        <Users users={users} />
      )}

      {currentPage === 'register' && (
        <Register onRegister={handleAddUser} />
      )}
    </>
  );
}

export default App;