// este é o arquivo principal da aplicação

const express = require("express")
const app = express() // carrega todo o express (framework para Node.js para construção de servidores web)

app.get("/", function(req, res){
    console.log("Rota get default está funcionando!")
    res.send("Bem vindo")
})

app.get("/hello/:name?", function(req, res){ // name é um parâmetro opcional (?)
    console.log("Rota /hello está funcionando!")
    var name = req.params.name
    if(name){
        res.send("Olá, " + req.params.name + "!")
    } else {
        res.send("Olá!")
    }
    
})

app.get("/job/:name/:company", function(req, res){
    console.log("Rota /job está funcionando!")
    res.send(req.params.name + " trabalha na empresa " + req.params.company)
})

app.get("/blog", function(req, res){
    var name = req.query["name"] // query params
    res.send("Você está acessando o blog: " + name)
})

app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    } else {
        console.log("Server iniciado com sucesso!")
    }
})