const express = require('express')
const api = require('./api')

const app = express()

app.use('/static',express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/productos',api)

const server = app.listen(8080,()=>{
  console.log('Server listening...')
})

server.on('error',()=>{
  console.log('Error server',e)
})