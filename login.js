document.addEventListener('DOMContentLoaded', function () {
    // Manejar navegación en el sidebar
    const links = document.querySelectorAll('.sidebar ul li a');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevenir el comportamiento por defecto
            const url = link.getAttribute('href');
            if (url) {
                window.location.href = url; // Redirige a la URL especificada
            }
        });
    });

    // Manejar logout
    const logoutButtons = document.querySelectorAll('#logoutNavbar, #logoutSidebar');
    logoutButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevenir el comportamiento por defecto
            localStorage.removeItem('userSession'); // Eliminar estado de sesión
            showNotification('Has cerrado sesión'); // Mostrar notificación
            setTimeout(() => {
                window.location.href = 'prncipal.html'; // Redirige a la página de inicio de sesión
            }, 1000); // Esperar 1 segundo antes de redirigir
        });
    });

    // Función para mostrar notificaciones
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 3000); // Mostrar notificación por 3 segundos
    }
});
        // Contenido para cargar dinámicamente
        const content = {
            'hacer_ventas': `
                <h2>Hacer Ventas</h2>
                <p>Aquí puedes realizar ventas.</p>
            `,
            'facturas': `
                <h2>Facturas</h2>
                <p>Aquí puedes ver y gestionar las facturas.</p>
            `,
            'registrar_clientes': `
                <h2>Registrar Clientes</h2>
                <p>Aquí puedes registrar nuevos clientes.</p>
            `,
            'registrar_empleados': `
                <h2>Registrar Empleados</h2>
                <p>Aquí puedes registrar nuevos empleados.</p>
            `,
            'ver_informes_clientes': `
                <h2>Ver Informes de Clientes</h2>
                <p>Aquí puedes ver los informes de los clientes.</p>
            `,
            'ver_informes_empleados': `
                <h2>Ver Informes de Empleados</h2>
                <p>Aquí puedes ver los informes de los empleados.</p>
            `,
            'cuenta_ahorros_clientes': `
                <h2>Cuenta de Ahorros de Clientes</h2>
                <p>Aquí puedes ver las cuentas de ahorro de los clientes.</p>
            `,
            'estado_cuenta_clientes': `
                <h2>Estado de Cuenta de Clientes</h2>
                <p>Aquí puedes ver el estado de cuenta de los clientes.</p>
            `,
            'estado_empleados': `
                <h2>Estado de Empleados</h2>
                <p>Aquí puedes ver el estado de los empleados.</p>
            `
        };

        // Función para cargar contenido dinámicamente en el main-content
        function loadContent(contentKey) {
            const mainContent = document.getElementById('mainContent');
            mainContent.innerHTML = content[contentKey] || `
                <h2>Bienvenido</h2>
                <p>Selecciona una opción del menú para empezar.</p>
            `;
        }

        // Asignar eventos a los enlaces de la barra lateral
        document.querySelectorAll('.sidebar a[data-content]').forEach(anchor => {
            anchor.addEventListener('click', function(event) {
                event.preventDefault(); // Evita el comportamiento predeterminado del enlace
                const contentKey = this.getAttribute('data-content');
                loadContent(contentKey);
            });
        });

        // Opcional: agregar funcionalidad para el botón de "Salir"
        document.getElementById('logoutNavbar').addEventListener('click', function(event) {
            event.preventDefault();
            alert('Cerrar sesión (implementa la lógica correspondiente)');
        });

        document.getElementById('logoutSidebar').addEventListener('click', function(event) {
            event.preventDefault();
            alert('Cerrar sesión (implementa la lógica correspondiente)');
        });

