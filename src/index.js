const express=require('express')
const app=express()
const PORT=8080

app.get('/',(req,res)=>{
    res.send('todo ok')
})

app.listen(PORT,()=>{
    console.log(`Listen port ${PORT}`)
})