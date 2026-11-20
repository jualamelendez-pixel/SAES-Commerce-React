import '../styles/Dashboard.css';
/*
  SAES COMMERCE
  Módulo: Panel principal
  Descripción: Muestra las opciones principales del sistema.
*/

function Dashboard() {

  // Opciones principales del sistema
  const modules = [
    {
      id: 1,
      title: "Usuarios",
      description: "Administrar los usuarios del sistema.",
      icon: "👥"
    },
    {
      id: 2,
      title: "Pedidos",
      description: "Consultar y gestionar los pedidos.",
      icon: "📦"
    },
    {
      id: 3,
      title: "Inventario",
      description: "Controlar los productos disponibles.",
      icon: "🏭"
    },
    {
      id: 4,
      title: "Despachos",
      description: "Organizar y consultar los despachos.",
      icon: "🚚"
    },
    {
      id: 5,
      title: "Catálogo",
      description: "Consultar el catálogo de productos.",
      icon: "📋"
    }
  ];

  return (
    <main className="dashboard-container">

      {/* Encabezado del sistema */}
      <header className="dashboard-header">
        <h1>SAES COMMERCE</h1>
        <p>Panel principal de administración</p>
      </header>

      {/* Bienvenida */}
      <section className="dashboard-welcome">
        <h2>Bienvenido al sistema</h2>
        <p>
          Desde aquí puedes acceder a los módulos
          de gestión de la plataforma.
        </p>
      </section>

      {/* Módulos disponibles */}
      <section className="dashboard-modules">

        {modules.map((module) => (
          <article className="module-card" key={module.id}>

            <span className="module-icon">
              {module.icon}
            </span>

            <h3>{module.title}</h3>

            <p>{module.description}</p>

          </article>
        ))}

      </section>

    </main>
  );
}

// Exportamos el componente para utilizarlo en la aplicación.
export default Dashboard;
