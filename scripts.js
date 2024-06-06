//CSS a través de Javascript

//BODY

document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    body.style.fontFamily = 'Roboto';
});


//CONTAINER1

document.addEventListener('DOMContentLoaded', function() {
    const container1 = document.querySelector('.container1');
    const buscaH1 = container1.querySelector('h1');
    const inputBuscar = document.querySelector('.inputBuscar');

    container1.style.backgroundColor = '#f2f3f3';
    container1.style.borderRadius = '10px';
    container1.style.margin = '0 0 20px';
    container1.style.padding = '50px';
    buscaH1.style.color ='#2c2d2d';
    buscaH1.style.fontSize = '50px';
    inputBuscar.style.padding = '10px';
    inputBuscar.style.fontSize = '16px';
    inputBuscar.style.width = '300px';
    inputBuscar.style.borderRadius = '50px';
    
});



//CONTAINER2

document.addEventListener('DOMContentLoaded', function() {
    
    const container2 = document.querySelector('.container2');
    const productH1 = container2.querySelector('h1');
    const productH2 = container2.querySelectorAll('.product h2');
    const products = document.querySelector('.products');
    const botonesComprar = document.querySelectorAll('.botonComprar');

    

    
    productH1.style.color = '#673ab7';
    productH1.style.fontSize = '50px';
    productH1.style.fontWeight = '600';
    container2.style.backgroundColor = '#eeeee4';
    container2.style.borderRadius = '10px';
    container2.style.margin = '0 auto';
    container2.style.padding = '50px';

    products.style.display = 'flex';
    products.style.flexWrap = 'wrap';
    products.style.justifyContent = 'space-between';

    cart.style.margin = '100px auto';

    //Botones
    botonesComprar.forEach(function(boton) {
        boton.style.fontSize = '15px'; 
        boton.style.padding = '10px 20px'; 
        boton.style.backgroundColor = '#000';
        boton.style.color = '#fff'; 
        boton.style.border = 'none'; 
        boton.style.borderRadius = '50px'; 
        boton.style.cursor = 'pointer'; 
    });

    // Product h2
    productH2.forEach(function(pH2) {
        pH2.style.fontWeight = '400'; 
    });
});

//PROMPT SIMPLE CON ALERT
//***********************************************************************************************************************

let botonIngresaNombre = document.getElementById('botonIngresaNombre');

botonIngresaNombre.addEventListener('click', solicitarNombre);

function solicitarNombre(){
    let nombre = prompt("Ingresá tu nombre acá");

    if (nombre) {
        alert("Hola, "+ nombre + " ¿cómo estás?.");
    } else {
        alert("Todavía no ingresaste tu nombre :)");
    }
};

//TRABAJANDO CON EL DOM
//***********************************************************************************************************************

//Buscador de productos

document.addEventListener('DOMContentLoaded', function() {

    const stockProductos = [
        {
            nombre: 'Sound Pro Run',
            descripcion: 'Una batería capaz de seguirte el ritmo las 24 horas.',
            precio: '$100',
        },
        {
            nombre: 'Sound Pro Walk',
            descripcion: 'Tan activo como vos.',
            precio: '$200',
        },
        {
            nombre: 'Music Beats',
            descripcion: 'Cancelación Activa de Ruido con Modo Ambiente.',
            precio: '$300',
        },
        {
            nombre: 'BassMorph',
            descripcion: 'Cada fibra de tu cuerpo vibra al son de la música. Los bajos más bajos, y los altos más altos.',
            precio: '$400',
        },
        {
            nombre: 'SoundSphere',
            descripcion: 'Una batería capaz de seguirte el ritmo las 24 horas.',
            precio: '$500',
        },
        {
            nombre: 'SoundSphere',
            descripcion: 'Sonido que te envuelve y llena la habitación con agradables ondas.',
            precio: '$600',
        },

    ];

    const inputBuscar = document.querySelector('.inputBuscar');
    const botonBuscar = document.querySelector('.botonBuscar');
    const resultados = document.querySelector('.resultados');

    botonBuscar.addEventListener('click', function() {
        const terminoBusqueda = inputBuscar.value.toLowerCase();
        const resultadosBusqueda = stockProductos.filter(producto => 
            producto.nombre.toLowerCase().includes(terminoBusqueda) ||
            producto.descripcion.toLowerCase().includes(terminoBusqueda)
        );

        if (terminoBusqueda === '') {
            resultados.innerHTML = '<p>Por favor, ingresá un término de búsqueda.</p>';
            return;
        }

        mostrarResultados(resultadosBusqueda);
    });

    function mostrarResultados(resultadosBusqueda) {
        resultados.innerHTML = '';
        if (resultadosBusqueda.length === 0) {
            resultados.innerHTML = '<p>No se encontraron productos.</p>';
        } else {
            resultadosBusqueda.forEach(producto => {
                const productoElemento = document.createElement('div');
                productoElemento.innerHTML = `<h2>${producto.nombre}</h2><p>${producto.descripcion}</h2><p>${producto.precio}</p>`;
                resultados.appendChild(productoElemento);
            });
        }
    }

});


//Simulador: agregando productos al carrito de compras

document.addEventListener('DOMContentLoaded', function() {
    const cart = document.getElementById('cart');
    const carList = document.getElementById('carList');
    const total = document.getElementById('total');
    let totalCompra = 0;

    const botonesComprar = document.querySelectorAll('.botonComprar');
    botonesComprar.forEach(boton => {
        boton.addEventListener('click', function() {
            const producto = boton.closest('.product');
            const nombreProducto = producto.querySelector('h2').textContent;
            const precioProducto = parseFloat(producto.querySelector('p').textContent.replace('Precio: $', ''));

            // Agregar producto al carrito
            const itemCarrito = document.createElement('li');
            itemCarrito.textContent = `${nombreProducto} : $${precioProducto}`;
            carList.appendChild(itemCarrito);

            // Calcular total
            totalCompra += precioProducto;
            total.textContent = totalCompra;
        });
    });
});

