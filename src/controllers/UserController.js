const usuarios = [
    {'id':1,'nome':'Tiago Morais'},
    {'id':2,'nome':'Fabricio Brito'}    
];

lerUsuarios = (req,res) =>{
    res.send(usuarios);
}

lerUmUsuario = (req,res) =>{ 
    let id = req.params.id;       
    const resposta = usuarios.find((usuario) => usuario.id === Number(id));
    if(resposta){ 
        res.send(resposta);
    }else{ 
        res.status(404).send("Usuário não encontrado");
    }
}

inserirUsuario = (req,res) => { 
    usuarios.push(req.body);
    res.status(201).send("Usuário Inserido com sucesso");
}

atualizarUsuario = (req,res) => { 
    // Buscar o usuario pela id
    // pegar o req.body e alterar o conteudo da linha do usuario do objeto
}

removerUsuario = (req,res) => {

}

module.exports = {lerUsuarios, lerUmUsuario, inserirUsuario,atualizarUsuario, removerUsuario};
