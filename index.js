require('dotenv').config();
const redis = require("redis");

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});

client.on("connect", function(error){
    console.log("Conectado!");
});

client.on("error", function(error){
    console.log(error);
});

const obj = {
    nome: "Paulo Freitas",
    email: "paulo.freitas.nt@gmail.com",
    profissao: "professor"
};

// Adicionando uma chave
// client.set("Teste", JSON.stringify(obj), function(err,resp){
//     if(err) throw err;
//     console.log(resp);
// });

// Buscando pela chave
// client.get("Teste", function(err, reply){
//     if(reply != null){
//         const teste = JSON.parse(reply.toString());
//         console.log(teste);
//     }else{
//         console.log("Chave não encontrada");
//     }
// });

// Removendo uma chave
// client.del("Teste", function(err, resp){
//     if(err) throw err;
//     console.log(resp);
// });

// Setando com tempo de vida
client.setex("Teste", 15, JSON.stringify(obj), function(err, resp){
    if(err) throw err;
    console.log(resp);
}); 