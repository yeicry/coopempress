function buscarCliente() {
    const inputBuscarCliente = document.getElementById('inputBuscarCliente').value;
    
    // Simulación de datos del cliente y transacciones
    const cliente = {
        nombre: 'Juan Pérez',
        correo: 'juan.perez@example.com',
        telefono: '123456789',
        direccion: 'Calle Falsa 123',
        saldo: '$1,250.00',
        estadoCuenta: 'Activa', // Puede ser 'Bloqueada' o 'Activa'
        prestamoPendiente: 'Sí' // Puede ser 'Sí' o 'No'
    };

    const transacciones = [
        { tipo: 'Depósito', monto: '$500.00', fecha: '2024-07-01' },
        { tipo: 'Retiro', monto: '$150.00', fecha: '2024-07-05' },
        { tipo: 'Depósito', monto: '$300.00', fecha: '2024-07-10' }
    ];

    // Mostrar la información del cliente
    document.getElementById('nombreCliente').textContent = cliente.nombre;
    document.getElementById('correoCliente').textContent = cliente.correo;
    document.getElementById('telefonoCliente').textContent = cliente.telefono;
    document.getElementById('direccionCliente').textContent = cliente.direccion;
    document.getElementById('saldoCliente').textContent = cliente.saldo;
    document.getElementById('estadoCuenta').textContent = cliente.estadoCuenta;
    document.getElementById('prestamoPendiente').textContent = cliente.prestamoPendiente;

    // Mostrar las transacciones
    const listaTransacciones = document.getElementById('listaTransacciones');
    listaTransacciones.innerHTML = ''; // Limpiar la lista

    transacciones.forEach(function(transaccion) {
        const li = document.createElement('li');
        li.textContent = `Tipo: ${transaccion.tipo}, Monto: ${transaccion.monto}, Fecha: ${transaccion.fecha}`;
        listaTransacciones.appendChild(li);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sección de Estado de Cuentas Clientes cargada.');

    // Funcionalidades específicas para la sección de Facturas
    // Por ejemplo, inicializar una tabla de facturas, añadir eventos, etc.
});
