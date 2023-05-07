import { log } from 'console'
import express, { Request, Response } from 'express'

const app = express()

app.get('/', ((req: Request,res:Response)=> {return res.json('funcionando')}))


app.listen(3000, ()=>{
    log('servidor rodando na porta 3000')
})