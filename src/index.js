const express=require('express')
const app=express()
const PORT=process.env.PORT || 8080 

app.get('/',(req,res)=>{
    res.send('todo ok')
})

app.listen(PORT,()=>{
    console.log(`Listen port ${PORT}`)
})

//ramas disponibles --> git branch

//para cambiar de rama --> git checkout <nombrerama>

//crear rama --> git checkout -b <nombrerama>

//borrar rama --> git checkout -d <nombrerama>

//merge ramas -> git merge <nombrerama>

//se crea una rama automaticamente al conectar con heroku, para eliminar --> heroku 

//para push rama heroku --> git heroku push master