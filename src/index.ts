import express, { Request, Response, Express} from 'express'
import routes from './routes'
const app :Express = express()
import dotenv from 'dotenv'
dotenv.config()
const PORT = 3000
app.use(express.json());

app.get('/',(req: Request,res: Response) => {
  console.log(process.env.HOST)
  res.send('Hello, Backend Word');    
})

app.use(routes)

app.listen(process.env.PORT,() => {  
  console.log (`server running on http://localhost:${PORT}`) 
})