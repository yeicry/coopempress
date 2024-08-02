document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const resultContainer = document.getElementById('resultContainer');
    const ventasInfoContainer = document.getElementById('ventasInfo');

    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const clientName = document.getElementById('clientName').value.trim();
            searchFactura(clientName);
        });
    }

    function searchFactura(clientName) {
        // Aquí deberías implementar la lógica para buscar la factura por el nombre del cliente
        // Ejemplo de búsqueda simulada:
        const factura = {
            id: 1,
            client: 'Cliente Ejemplo',
            product: 'Producto Ejemplo',
            amount: 1,
            total: 100
        };

        if (factura && factura.client.toLowerCase().includes(clientName.toLowerCase())) {
            const facturaHtml = `
                <div class="factura-item">
                    <p>ID Factura: ${factura.id}</p>
                    <p>Cliente: ${factura.client}</p>
                    <p>Producto: ${factura.product}</p>
                    <p>Cantidad: ${factura.amount}</p>
                    <p>Total: ${factura.total}</p>
                    <button class="delete-btn" data-id="${factura.id}">Eliminar</button>
                    <button class="edit-btn" data-id="${factura.id}" data-client="${factura.client}" data-product="${factura.product}" data-amount="${factura.amount}" data-total="${factura.total}">Editar Factura</button>
                </div>
            `;
            resultContainer.innerHTML = facturaHtml;

            // Actualizar información de ventas
            updateVentasInfo(factura);
        } else {
            resultContainer.innerHTML = '<p>No se encontraron facturas para el cliente especificado.</p>';
            ventasInfoContainer.innerHTML = ''; // Limpiar información de ventas si no hay resultados
        }

        // Agregar event listeners para botones de eliminar y editar
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', function() {
                const facturaId = this.getAttribute('data-id');
                deleteFactura(facturaId);
            });
        });

        document.querySelectorAll('.edit-btn').forEach(button => {
            button.addEventListener('click', function() {
                const facturaId = this.getAttribute('data-id');
                const client = this.getAttribute('data-client');
                const product = this.getAttribute('data-product');
                const amount = this.getAttribute('data-amount');
                const total = this.getAttribute('data-total');
                editFactura(facturaId, client, product, amount, total);
            });
        });
    }

    function updateVentasInfo(factura) {
        const ventasInfoHtml = `
            <div>
                <strong>ID Factura:</strong> ${factura.id}<br>
                <strong>Cliente:</strong> ${factura.client}<br>
                <strong>Producto:</strong> ${factura.product}<br>
                <strong>Cantidad:</strong> ${factura.amount}<br>
                <strong>Total:</strong> ${factura.total}
            </div>
        `;
        ventasInfoContainer.innerHTML = ventasInfoHtml;
    }

    function deleteFactura(id) {
        // Aquí deberías implementar la lógica para eliminar la factura
        alert(`Factura con ID ${id} eliminada.`);
        resultContainer.innerHTML = ''; // Limpiar resultados
        ventasInfoContainer.innerHTML = ''; // Limpiar información de ventas
    }

    function editFactura(id, client, product, amount, total) {
        // Aquí deberías implementar la lógica para editar la factura
        alert(`Editar factura con ID ${id}. Cliente: ${client}, Producto: ${product}, Cantidad: ${amount}, Total: ${total}`);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Sección de Facturas cargada.');

    // Funcionalidades específicas para la sección de Facturas
    // Por ejemplo, inicializar una tabla de facturas, añadir eventos, etc.
});
