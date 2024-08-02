document.addEventListener('DOMContentLoaded', function() {
    const hacerVentasForm = document.getElementById('hacerVentasForm');

    if (hacerVentasForm) {
        // Obtener el elemento select de productos y el campo de precio
        const productoSelect = document.getElementById('productoSelect');
        const precioProductoInput = document.getElementById('precioProducto');

        // Evento para actualizar el precio cuando se selecciona un producto
        productoSelect.addEventListener('change', function() {
            const selectedOption = productoSelect.options[productoSelect.selectedIndex];
            const precioProducto = selectedOption.getAttribute('data-precio');

            // Mostrar el precio en el campo correspondiente
            precioProductoInput.value = `$${precioProducto}`;
            calcularMontoTotal();
        });

        // Evento para calcular el monto total al cambiar la cantidad o el precio unitario
        const cantidadInput = document.getElementById('cantidadProducto');
        const descuentoInput = document.getElementById('descuentoProducto');

        cantidadInput.addEventListener('input', calcularMontoTotal);
        descuentoInput.addEventListener('input', calcularMontoTotal);

        function calcularMontoTotal() {
            const cantidad = parseFloat(cantidadInput.value) || 0;
            const precio = parseFloat(precioProductoInput.value.replace('$', '')) || 0;
            const descuento = parseFloat(descuentoInput.value) || 0;

            let total = cantidad * precio;
            if (descuento > 0) {
                total -= (total * (descuento / 100));
            }

            const montoTotalSpan = document.getElementById('montoTotal');
            montoTotalSpan.textContent = `$${total.toFixed(2)}`;
        }

        // Evento para mostrar campos específicos según el método de pago seleccionado
        const tipoPagoSelect = document.getElementById('tipoPago');
        const infoTarjetaDiv = document.getElementById('infoTarjeta');
        const infoTransferenciaDiv = document.getElementById('infoTransferencia');

        tipoPagoSelect.addEventListener('change', function() {
            if (tipoPagoSelect.value === 'tarjeta') {
                infoTarjetaDiv.style.display = 'block';
                infoTransferenciaDiv.style.display = 'none';
            } else if (tipoPagoSelect.value === 'transferencia') {
                infoTarjetaDiv.style.display = 'none';
                infoTransferenciaDiv.style.display = 'block';
            } else {
                infoTarjetaDiv.style.display = 'none';
                infoTransferenciaDiv.style.display = 'none';
            }
        });

        // Función inicial para calcular el monto total al cargar la página
        calcularMontoTotal();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Sección de Hacer Ventas cargada.');

    // Aquí puedes agregar cualquier funcionalidad específica para la sección de Hacer Ventas
    // Por ejemplo, puedes inicializar componentes, añadir eventos, etc.
});
