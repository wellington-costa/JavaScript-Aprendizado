const Connect = require('../models/connectDB');


exports.index = async (req,res) => {
   
    const paciente = new Connect();
    
    if (await paciente.connectDB()) {
        console.log('Sucesso');
    }
    
    
    res.send(`Contato`);
};

exports.setPost = (req, res) => {
    res.send(`}`);
};