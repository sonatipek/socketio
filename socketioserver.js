const socketIO = require('socket.io');
const io = socketIO(8081);

io.on('connection', (socket) => {
  console.log('Bir kullanici bağlandi: ' + socket.id);

  socket.on('disconnect', () => {
    console.log('Bir kullanici ayrildi: ' + socket.id);
  });
//---------------------------------------------
  socket.on("test",(data)=>{
    console.log(`${socket.id} den Gelen bilgi ${data}`);
  })

  socket.on("topla",(data)=>{
    console.log(data.a+data.b)
  })
});


console.log("8081 portundan servis başlatılmıştır")