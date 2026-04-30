require ('dotenv').config()
const express = require ('express');
const app = express();
const general = require ('./routes/general.routes');
const static = require ('./routes/statics.routes');
const userRoutes = require('./routes/user.routes');
//const PORT = 3000

app.use(express.json()); // ele aceitar json na entrada das rotas

app.use('/general', general);
app.use('/static', static);
app.use('/users',userRoutes);

// sempre será o ultimo
// rota representa o code 404 - not found
app.use((req, res, next) =>{
    res.status(404).send('404 - Not Found')
});

app.listen(process.env.PORT, ()=>{
    console.log (`app rodando na porta ${process.env.PORT}`)
});