document.addEventListener('DOMContentLoaded', function() {
    const registrarEmpleadoForm = document.getElementById('registrarEmpleadoForm');
    const informeEmpleados = document.getElementById('informeEmpleados');

    if (registrarEmpleadoForm) {
        registrarEmpleadoForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Obtener valores del formulario
            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const correo = document.getElementById('correo').value;
            const direccion = document.getElementById('direccion').value;
            const telefono = document.getElementById('telefono').value;
            const cedula = document.getElementById('cedula').value;
            const puesto = document.getElementById('puesto').value;
            const nomina = document.getElementById('nomina').value;
            const genero = document.getElementById('genero').value;
            const edad = document.getElementById('edad').value;
            const carrera = document.getElementById('carrera').value;
            const usuario = document.getElementById('usuario').value;
            const contrasena = document.getElementById('contrasena').value;
            const accesoLimitado = document.getElementById('acceso').checked;

            // Crear objeto con los datos del empleado
            const empleado = {
                nombre,
                apellido,
                correo,
                direccion,
                telefono,
                cedula,
                puesto,
                nomina,
                genero,
                edad,
                carrera,
                usuario,
                contrasena,
                accesoLimitado
            };

            // Agregar empleado al informe
            agregarEmpleadoAlInforme(empleado);

            // Limpiar el formulario después de registrar
            registrarEmpleadoForm.reset();
        });
    }

    // Función para agregar empleado al informe
    function agregarEmpleadoAlInforme(empleado) {
        const empleadoItem = document.createElement('li');
        empleadoItem.textContent = `${empleado.nombre} ${empleado.apellido} - ${empleado.puesto}`;
        informeEmpleados.appendChild(empleadoItem);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Sección de Registrar Empleados cargada.');

    // Funcionalidades específicas para la sección de Facturas
    // Por ejemplo, inicializar una tabla de facturas, añadir eventos, etc.
});
