const { Users } = require ('../models');
const { Op } = require ('sequelize');

module.exports = {
    //CREATE - Cadastrar novo usuário
    async createUser (req, res){
        try {
            //tentar realizar esse bloco
            const {nome, cpf, email, senha, tipo_usuario} = req.body;
            if(!['admin', 'user', 'dev'].includes(tipo_usuario)){
                return res.status(400).json (
                    {message: "tipo de usuário inválido"});
            }
            const emailExistente = await Users.findOne({where: {email}});
            if (emailExistente){
                return res.status(400).json (
                    {message: "Usuário já cadastrado!"});               
            }
            await Users.create({nome, cpf, email, senha, tipo_usuario});
            return res.status(201);

        } catch (error) {
            // se eu não conseguir, eu finalizo em erro e executo esse
            return res.status(500).json({message: 'Erro ao criar usuário',
                error: error.message });
        }
    },
}