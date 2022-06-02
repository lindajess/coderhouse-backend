import config from "./config";
import express  from "express";
import cors from "cors";
import RouterNoticias from './router/noticias.js'

const app = express()

// MIDDLEWARES
app.use(express.static('public'))
app.use(express.json())

//RUTAS
const routerNoticias = new RouterNoticias()
app.use('/noticias', routerNoticias.start())

const PORT = process.env.PORT || 8000
server =  app.listen(PORT, ()=>{
    console.log("server up")
})

server.on('error', error =>{
    console.log('servidor express had an error', error)
})