const routes = {
    '/ajustes': 'vistas/ajustes/ajustes.php', 
  };
  
  function loadRoute() {
    const path = location.hash.replace('#', '') || '/';
    const route = routes[path];
  
    if (!route) {
      document.getElementById('app').innerHTML = '<h2>Página no encontrada</h2>';
      return;
    }
  
    fetch(route)
      .then(response => response.text())
      .then(content => {
        const app = document.getElementById('app');
  
        if (path === '/texto_himno') {
          // Si es el archivo .txt → mostrarlo como párrafos
          app.innerHTML = '<h1>Contenido de Himnos</h1><div id="texto-himnos"></div>';
          const contenedor = document.getElementById('texto-himnos');
  
          content.split('\n').forEach(linea => {
            if (linea.trim() !== '') {
              const p = document.createElement('p');
              p.textContent = linea;
              contenedor.appendChild(p);
            }
          });
        } else {
          // Si es HTML → lo inyectamos directo
          app.innerHTML = content;
        }
      })
      .catch(error => {
        console.error('Error al cargar la ruta:', error);
        document.getElementById('app').innerHTML = '<h2>Error cargando contenido</h2>';
      });
  }
  
  // Escucha cambios en la URL
  window.addEventListener('hashchange', loadRoute);
  
  // Carga la ruta inicial
  window.addEventListener('DOMContentLoaded', loadRoute);
  