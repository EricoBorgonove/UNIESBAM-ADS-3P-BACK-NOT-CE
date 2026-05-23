const jwt = require('jsonwebtoken');
const { Users } = require('../models');

module.exports = {
    async login (req, res){
        try {
            const { email, senha } = req.body;

            if (!email || !senha){
                return res.status(400).json({
                    message:"email e senha são obrigatórios."
                });               
            }
            const user = await Users.findOne({
                where: { email }
            });
            if (!user){
                return res.status(401).json({
                    message:"email ou senha inválidos."
                });               
            }
            const senhaValida = await user.validarSenha(senha);

            if (!senhaValida){
                return res.status(401).json({
                    message:"email ou senha inválidos."
                });               
            }

            const token = jwt.sign(
                {
                    id: user.id,
                    nome: user.name,
                    email: user.email,
                    tipo_usuario: user.tipo_usuario
                },
                process.env.JWT_SECRET,
                {
                    expiresIn:  process.env.JWT_EXPIRESIN
                }
            );
            res.status(200).json({
                message:"Login Realizado com sucesso",
                token,
                user:{
                    id: user.id,
                    nome: user.name,
                    tipo_usuario: user.tipo_usuario
                }
            });
        } catch (error) {
            return res.status(500).json({
                message:"Erro do realizar Login.",
                error: error.message
            });
        }
    }
}

