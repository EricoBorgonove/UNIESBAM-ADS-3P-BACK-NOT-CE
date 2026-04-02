import bcrypt from 'bcrypt';

const senha = '123456'
const salt = await bcrypt.genSalt(10);
const senhaCrip = await bcrypt.hash(senha, salt);
const comparacao = await bcrypt.compare(senha, senhaCrip);

console.log (`salt : ${salt}`);
console.log (`senha criptografada : ${senhaCrip}`);
console.log (`comparaçao senha:  ${comparacao}`);