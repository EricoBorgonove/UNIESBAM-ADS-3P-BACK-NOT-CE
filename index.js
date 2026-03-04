require ('dotenv').config()

const express = require ('express');

const app = express();
//const PORT = 3000

app.get('/health', (req, res) => {
    res.send("App running ok")
});

// sempre será o ultimo
app.listen(process.env.PORT, ()=>{
    console.log (`app rodando na porta ${process.env.PORT}`)
});