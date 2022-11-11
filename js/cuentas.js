// --------------------------------------------------------------------------------//
// -- PROYECTO: TIENDA ONLINE -----------------------------------------------------//
// -- ALUMNO: Lucas Barbieri ------------------------------------------------------//
// --------------------------------------------------------------------------------//
function obtenerListaUser(){

    let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

    if(listaUsuarios == null){
        listaUsuarios = 
        [
            // ID // USER // PASS // NOMBRE COMPLETO // CONTACTO // ROL //
            // ----------------------- ADMIN -------------------------- //
            ['1','admin','123','Lucas Barbieri','11.2222.2222', 'admin', 'online'],
            ['2','admin2','123','Lucas Barbieri','11.2222.2222', 'admin', 'online'],
            // ---------------------- CLIENTES ------------------------ //
            ['3','cliente','123','Lucas Barbieri','11.2222.2222', 'cliente', 'online'],
            ['4','clien','123','Lucas Barbieri','11.2222.2222', 'cliente', 'online']
            // -------------------------------------------------------- //
        ]
    }

    return listaUsuarios;

}
// --------------------------------------------------------------------------------//
function validarCredenciales (pUsuario, pPassword){

    let listaUsuarios = obtenerListaUser()
    let bAcceso = false;

    for(let i = 0; i < listaUsuarios.length; i++){
        if(pUsuario.toLowerCase() == listaUsuarios[i][1] && pPassword.toLowerCase() == listaUsuarios[i][2]){
            bAcceso = true;  
            localStorage.setItem('userId', listaUsuarios[i][0])
            localStorage.setItem('userName', listaUsuarios[i][1])
            localStorage.setItem('userPass', listaUsuarios[i][2])
            localStorage.setItem('userlastname', listaUsuarios[i][3])
            localStorage.setItem('userContact', listaUsuarios[i][4])
            localStorage.setItem('rolUsuario', listaUsuarios[i][5])
            localStorage.setItem('userConnect', listaUsuarios[i][6])
            break;
        }
 
    }

    return bAcceso;

}
// --------------------------------------------------------------------------------//
function iniciarSession(){

    let sUsuario = "";
    let sPassword = "";

    sUsuario = document.getElementById('user-id').value;
    sPassword = document.getElementById('password-id').value;

    bAcceso = validarCredenciales(sUsuario, sPassword); 

    if(bAcceso == true){
        let rol = localStorage.getItem('rolUsuario');
        switch(rol){
            case 'admin':
                window.location = "admin.html";
            break;
            case 'cliente':
                window.location = "cliente.html";
            break;
            default:
                window.location = "index.html";
            break;
        }

    }else if(bAcceso == false){
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
            icon: 'warning',
            title: 'Contraseña incorrecta!'
        })
           
    }
}
// --------------------------------------------------------------------------------//
// function recordarUser(){
//     if(recordarUser.checked){
//         // LOCAL SI ESTA CHEQUEADO
//     }else{
//         // SESSION SI NO ESTA CHEQUEADO
//     }
// }
// --------------------------------------------------------------------------------//
const btnIngresar = document.getElementById('btnLogin')
const alertContenedor = document.getElementById('alerta-cont')

btnIngresar.addEventListener('click', (e)=>{
    e.preventDefault();
    iniciarSession();

})
// --------------------------------------------------------------------------------//