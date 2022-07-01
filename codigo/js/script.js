// declara um conjunto inicial de usuarios
var db_usuario_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Leanne Graham",        
            "categoria": "Usuário",
            "email": "Sincere@april.biz",
            "senha": "*****",
        },
       {
            "id": 2,
            "nome": "Henrique",            
            "categoria": "Moderador",
            "email": "henrique@henrique.com",
            "senha": "*****",
        },
        {
            "id": 3,
            "nome": "André M",            
            "categoria": "Administrador",
            "email": "andre@lindo.br",
            "senha": "*****",
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_usuario'));
if (!db) {
    db = db_usuario_inicial;
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertUsuario(usuario) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoUsuario = {
        "id": novoId,
        "nome": usuario.nome,
        "email" : usuario.email,
        "categoria": usuario.categoria,
        "senha": usuario.senha
 
    };

    // Insere o novo objeto no array
    db.data.push(novoUsuario);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_usuario', JSON.stringify(db));
}

function updateUsuario(id, usuario) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = usuario.nome,
    db.data[index].email = usuario.email,
    db.data[index].categoria = usuario.categoria,
    db.data[index].senha = usuario.senha
  

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_usuario', JSON.stringify(db));
}

function deleteUsuario(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Usuario removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_usuario', JSON.stringify(db));
}