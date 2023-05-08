
import express, { Request, Response, json, urlencoded } from 'express'
import 'reflect-metadata'

function Server(){
const app = express()

const port = process.env.PORT || 3000

app.get('/', ((req: Request,res:Response)=> {return res.json('funcionando')}))

app.use(urlencoded({extended:true}))
app.use(json())


app.listen(port, ()=>{
    console.log(`servidor rodando em http://localhost:${port}`)
})
}
Server()