const fs = require('fs');
const app = require('./appConfig.js')
const PORT = process.env.PORT || 8087;
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io');
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

let messages = []
const server = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

let data=[]
const products = [{
    name: "shampoo",
    price: 200,
    urlIMG: "nose"
}, {
    name: "no",
    price: 250,
    urlIMG: "nose"
}, {
    name: "sh",
    price: 300,
    urlIMG: "nose"
}]
io.on('connection', (socket) => {
    console.log('se conecto un cliente');
    //para enviar 
    // socket.emit('productos',products)


    socket.on('mensaje',datos=>{
        try {
          
          data.push(JSON.stringify(datos))
          
           fs.writeFile('./public/chatLog.json', data,'utf-8',(err=>{
               if (err) {
                   console.log(err);
               }
               
           }))
            const modificado=  fs.readFileSync('./public/chatLog.json', 'utf-8')
            
            socket.emit('mensajes', modificado)
        } catch (error) {
            console.log(error);
        }

        
    })

   





    // socket.on('new-message', (data) => {
    //     // messages.push(data);
    //     messages = [...messages, data]
    //     // console.log(products.getAll());
    //     console.log(messages);
    //     let todo = { messages: messages, products: products }
    //     io.sockets.emit('messages', todo)
    // })
    // socket.on('new-product', (data) => {
    //     console.log(data);
    //     products.save(data);
    //     console.log(products);
    //     let todo = { messages: messages, products: products }
    //     io.sockets.emit('messages', todo)
    // })

})