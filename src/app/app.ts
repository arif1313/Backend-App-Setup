import express, { Request, Response } from 'express'
const app = express()
const port = 3000
//perser 
app.use(express.json())
app.use(express.text())

app.get('/', (req:Request, res:Response) => {
  res.send('Hello friendsrrr after node good mornig!')
})
app.post('/',(req:Request, res:Response)=>{
  console.log(req.body)
  res.send("got Data in from the request")
})

export default app;