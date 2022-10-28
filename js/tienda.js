// --------------------------------------------------------------------------------//
// -- PROYECTO: TIENDA ONLINE -----------------------------------------------------//
// -- ALUMNO: Lucas Barbieri ------------------------------------------------------//
// --------------------------------------------------------------------------------//
const carrito = []
// --------------------------------------------------------------------------------//
document.addEventListener('DOMContentloaded', () => {

    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }

})
// --------------------------------------------------------------------------------//
const productos = [{
    id: 1,
    img: './img/imagen.png',
    titulo: 'Diseño web 1',
    descripcion: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    precio: '3000',
    stock: 4,
    cantidad: '1'
}, {
    id: 2,
    img: './img/imagen.png',
    titulo: 'Diseño web 2',
    descripcion: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    precio: '3000',
    stock: 4,
    cantidad: '1'
}, {
    id: 3,
    img: './img/imagen.png',
    titulo: 'Diseño web 3',
    descripcion: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    precio: '3000',
    stock: 4,
    cantidad: '1'
}, {
    id: 4,
    img: './img/imagen.png',
    titulo: 'Diseño web 4',
    descripcion: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    precio: '3000',
    stock: 4,
    cantidad: '1'
}, {
    id: 5,
    img: './img/imagen.png',
    titulo: 'Diseño web 4',
    descripcion: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    precio: '3000',
    stock: 4,
    cantidad: '1'
}, {
    id: 6,
    img: './img/imagen.png',
    titulo: 'Diseño web 5',
    descripcion: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    precio: '3000',
    stock: 4,
    cantidad: '1'
}, {
    id: 7,
    img: './img/imagen.png',
    titulo: 'Diseño web 6',
    descripcion: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    precio: '3000',
    stock: 4,
    cantidad: '1'
}, {
    id: 8,
    img: './img/imagen.png',
    titulo: 'Diseño web 7',
    descripcion: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    precio: '3000',
    stock: 4,
    cantidad: '1'
}, {
    id: 9,
    img: './img/imagen.png',
    titulo: 'Diseño web 8',
    descripcion: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    precio: '3000',
    stock: 4,
    cantidad: '1'
}, {
    id: 10,
    img: './img/imagen.png',
    titulo: 'Diseño web 9',
    descripcion: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    precio: '3000',
    stock: 4,
    cantidad: '1'
}, {
    id: 11,
    img: './img/imagen.png',
    titulo: 'Diseño web 10',
    descripcion: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    precio: '3000',
    stock: 4,
    cantidad: '1'
}, {
    id: 12,
    img: './img/imagen.png',
    titulo: 'Diseño web 11',
    descripcion: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    precio: '3000',
    stock: 4,
    cantidad: '1'
}]
// --------------------------------------------------------------------------------//
const contenedorProductos = document.getElementById('cont-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const btnvaciarCarrito = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contador-carrito')
const precioTotal = document.getElementById('preciototal')
// --------------------------------------------------------------------------------//
btnvaciarCarrito.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    Toast.fire({
        icon: 'success',
        title: 'Vaciaste el carrito!'
    })
})
 // --------------------------------------------------------------------------------//
productos.forEach(producto => {

    const div = document.createElement('div')
    div.className = 'col mb-5'

    div.innerHTML = `
    <div class="card h-100">
    <img class="card-img-top" src=${producto.img} alt="..." />
    <div class="card-body p-4">
        <div class="text-center">
            <h5 class="fw-bolder">${producto.titulo}</h5>
            $ ${producto.precio}
        </div>
    </div>
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><button class="btn btn-outline-dark mt-auto" id="agregar${producto.id}">Agregar al carrito</button></div>
    </div>
    </div>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarCarrito(producto.id)
    })

});
// --------------------------------------------------------------------------------//
const agregarCarrito = (prodId) => {
    const existe = carrito.some(prod => prod.id === prodId)

    if(existe){
        const prod = carrito.map (prod => {
            if(prod.id == prodId){
                prod.cantidad++
            }
            Swal.fire({
                title: 'Producto existente',
                text: 'Este producto ya existe en el carrito! Cantidad actual: ' + prod.cantidad,
                icon: 'info',
                iconColor: 'orange',
                confirmButtonText: 'Entendido',
                showCancelButton: false,
                cancelButtonText: ''
                // backdrop: 'orange'
                // timer: 2500
            })
        })
    }else{
        let item = productos.find((prod) => prod.id === prodId)
        carrito.push(item)

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        
        Toast.fire({
            icon: 'success',
            title: 'Producto agregado!'
        })
    }
    

    actualizarCarrito()
}
// --------------------------------------------------------------------------------//
const eliminarDelCarrito = (prodId) => {

    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1)
    actualizarCarrito()

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    Toast.fire({
        icon: 'success',
        title: 'Producto eliminado!'
    })

}
// --------------------------------------------------------------------------------//
function actualizarCarrito() {

    contenedorCarrito.innerHTML = ""

    carrito.forEach((producto) => {
    
        const div = document.createElement('div')
        div.className = 'col mb-5'
        div.innerHTML = `
        <div class="card h-100">
        <img class="card-img-top" src=${producto.img} alt="..." />
        <div class="card-body p-4">
            <div class="text-center">
                <h5 class="fw-bolder">${producto.titulo}</h5>
                $ ${producto.precio}
            </div>
        </div>
        <p>Stock: ${producto.stock}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <button type="button" onclick="eliminarDelCarrito(${producto.id})" class="btn btn-outline-warning mt-auto">Eliminar</button>
        </div>
        </div>
        `
        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))
        
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0) 
    localStorage.setItem('carrito', JSON.stringify(carrito))


}
// --------------------------------------------------------------------------------//
// function agregarProducto(){

//     alert("Ingresa el producto deseado")
//     let agregarTitulos = prompt("Ingrese el titulo:")
//     let agregarDetalle = prompt("Ingrese el detalle:")
//     let agregarStock =  parseInt(prompt("Ingrese la cantidad de stock:"))
//     let agregarPrecio = parseInt(prompt("Ingrese el precio:"))
//     let productoAgregado = new Productos(deposito.length+1,agregarTitulos, agregarDetalle, agregarStock, agregarPrecio)
//     deposito.push(productoAgregado)

// }
// --------------------------------------------------------------------------------//
// function eliminarProducto(){

//     alert("Estas por eliminar un producto!")
//     let idEliminar = prompt("Ingrese la id del producto a eliminar:")
//     for(let libroBuscado of deposito){
//         if (libroBuscado.id == idEliminar){
//             alert("Este es el producto " + libroBuscado.titulo)
//             deposito.splice(idEliminar-1, 1)
//         }
//     }
    
// }
// --------------------------------------------------------------------------------//
const btnCerrarr = document.getElementById('btnlogout')
btnCerrarr.addEventListener('click', logout)
// --------------------------------------------------------------------------------//
// -- LOGICA ----------------------------------------------------------------------//

// --------------------------------------------------------------------------------//
// -- COMENTARIOS -----------------------------------------------------------------//
// sessionStorage.clear();              // Limpia el carrito
// e.preventDefault();                  // No recarga la pagina
// ------------------------------- COPYRIGHT --------------------------------------//
// -------------------------------- FINGER ----------------------------------------//
// --------------------------------- 2020 -----------------------------------------//
// --------------------------------------------------------------------------------//