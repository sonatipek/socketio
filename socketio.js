// Aşağıdaki kodu fastapi server da aktif edin
// const socket = io("10.135.109.87:8081",{transports: ["websocket", "polling"] ,path:"/ws/socket.io"});
//Aşağıdaki satırı nodejs server a bağlanırken kullanın
const socket = io("http://10.135.109.87:8081",{transports: ["websocket", "polling", "flashsocket"]});
/*
socket.on("connect", () => { console.log("Connected", socket.id) }); 
socket.on("response", () => { console.log("Response", socket.id) });  
socket.on("message", data => { console.log(data) });*/

socket.on("Ne Alirsiniz", data => { console.log(data) });
socket.on("resepsiyon",data=> { 
    console.log(data) 
});

socket.emit("Ne Alirsiniz", "Bir Çay");
socket.emit("test","Merhaba");
socket.emit("topla",{a:50,b:80})

socket.on("emir", (data) => {
    console.log(data);
});

console.log("Client aktif");
let sayac = 1
setInterval(() => {
    socket.emit("emir", sayac )
    sayac += 1;
}, 10000);

