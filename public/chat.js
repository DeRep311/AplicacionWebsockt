const socket = io.connect(); 

const email = document.getElementById('Gmail')
const mensaje= document.getElementById('mensaje')
const chat=document.getElementById('chat')
const btn = document.getElementById('envio')

btn.addEventListener('click', function(){
    socket.emit('mensaje',{
        menssage: mensaje.value,
        Gmail: email.value

    });
    socket.on('mensajes',function (datos){
        // chat.innerHTML=`<p> ${datos.menssage} </p> `
    })
});

// function obtenerPlantillaProductos(productos) {
  
//     // return html completo de la plantilla con los productosreturn 
//     fetch('./products.hbs')
//     .then(response => response.text())
//     .then(plantilla => {
//             const plantillaHBS = Handlebars.compile(plantilla)
//             const htmlCompleto = plantillaHBS({ productos })
//             return htmlCompleto
//         })
// }
// socket.on('productos', async products => {
//     const html = await obtenerPlantillaProductos(products)
//     document.getElementById('TablaSalida').innerHTML = html
// }) 

//Chat
