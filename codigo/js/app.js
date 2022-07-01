// declara um conjunto inicial de contatos
var db_tutorias_inicial = {
  "data": [
    {
      "id": 1,
      "nome": "tutorial-googleDocs",
      "titulo": "Tutorial sobre o Google Docs",
      "descricao": "Tutorial básico sobre a plataforma do Google,o Google Docs",
      "texto": "Este vídeo introduz o usuário a como utilizar a plataforma Google Docs",
      "linkYoutube": "l1rqXpoOfNc",
      "autor": "Tools Learning",
      "dataCriacao": "2022-05-25",
      "categoria": "Streamings",
      "publicado": "Sim"
    },
    {
      "id": 2,
      "nome": "tutorial-GoogleDrive",
      "titulo": "Tutorial Sobre o Google Drive ",
      "descricao": "Tutorial básico sobre a plataforma do Google, o Google Drive",
      "texto": "Este vídeo introduz o usuário a como utilizar a plataforma Google Drive",
      "linkYoutube": "a8uzvq8ozpw",
      "autor": "Tools Learning",
      "dataCriacao": "2022-05-25",
      "categoria": "Outros",
      "publicado": "Sim"
    },
    {
       "id": 3,
       "nome": "tutorial-gmail",
       "titulo": "Tutorial de como criar um Gmail e aumentar sua segurança!",
       "descricao": "Tutorial básico sobre a plataforma de emails da Google, o Gmail",
       "texto": "Este vídeo introduz o usuário a como utilizar a plataforma Gmail",
       "linkYoutube": "oh8snpY_VPg",
       "autor": "Techly",
       "dataCriacao": "2022-05-25",
       "publicado": "Sim"
     },
     {
       "id": 4,
       "nome": "tutorial-Canva",
       "titulo": "Crie Designs Incríveis com o Canva ",
       "descricao": "Tutorial básico sobre a plataforma de Design Canva",
       "texto": "Este vídeo introduz o usuário a como utilizar a plataforma Canva",
       "linkYoutube": "rc2QM0gLY4w",
       "autor": "Techly",
       "dataCriacao": "2022-05-25",
       "publicado": "Sim"
     },
     {
       "id": 5,
       "nome": "tutorial-impressora",
       "titulo": "COMO INSTALAR UMA IMPRESSORA HP ",
       "descricao": "Tutorial básico de como instalar uma impressora da marca Hp",
       "texto": "Este vídeo auxilia o usuário a como instalar de maneira fácil e rápida qualquer impressora da marca HP.",
       "linkYoutube": "tOKwehknNcg",
       "autor": "Mw Informática",
       "dataCriacao": "2022-05-25",
       "publicado": "Sim"
     },
     {
       "id": 6,
       "nome": "tutorial-libreoffice-calculadora",
       "titulo": "LibreOffice Calc",
       "descricao": "Tutorial básico de como utilizar a plataforma LibreOffice Cal",
       "texto": "Este tutorial introduz o usuário a como utilizar a LibreOfiice Calc, conhecido também como o excel gratuito, justamente por oferecer funções parecidas de maneira gratuita",
       "linkYoutube": "4KpzpIj9izw",
       "autor": "Tools Learning",
       "dataCriacao": "2022-05-25",
       "publicado": "Sim"
     },
     {
       "id": 7,
       "nome": "tutorial-youtube",
       "titulo": "Tutorial básico de como criar uma conta na plataforma Youtube ",
       "descricao": "Tutorial básico de como utilizar a plataforma Youtube.",
       "texto": "Este tutorial introduz o usuário a como criar uma conta no Youtube e personalizar a mesma",
       "linkYoutube": "OJSPPAIkxFc",
       "autor": "Techly",
       "dataCriacao": "2022-05-25",
       "publicado": "Sim"
     },
    {
       "id": 8,
       "nome": "tutorial-GoogleSlides",
       "titulo": "Tutorial básico de como utilizar a plataforma Google Slides",
       "descricao": "Este tutorial introduz o usuário a como utilizar a plaforma de criação de slides da Google, o Google slides",
       "texto": "texto do tutorial",
       "linkYoutube": "g9xdDDgkLHE",
       "autor": "Tools Learning",
       "dataCriacao": "2022-05-25",
       "publicado": "Sim"
     }
    
  ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_tutorial'));
if (!db) {
  db = db_tutorias_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
  $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertTutorial(tutorial) {
  // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
  let novoId = 1;
  if (db.data.length != 0)
    novoId = db.data[db.data.length - 1].id + 1;
  let novoTutorial = {
    "id": novoId,
    "nome": tutorial.nome,
    "titulo": tutorial.titulo,
    "descricao": tutorial.descricao,
    "texto": tutorial.texto,
    "linkYoutube": tutorial.linkYoutube,
    "autor": tutorial.autor,
    "dataCriacao": tutorial.dataCriacao,
    "categoria": tutorial.categoria,
    "publicado": tutorial.publicado
  };

  // Insere o novo objeto no array
  db.data.push(novoTutorial);
  displayMessage("Tutorial inserido com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem('db_tutorial', JSON.stringify(db));
  return novoTutorialtutorial.nome;
}

function updateTutorial(id, tutorial) {
  // Localiza o indice do objeto a ser alterado no array a partir do seu ID
  let index = db.data.map(obj => obj.id).indexOf(id);

  // Altera os dados do objeto no array
    db.data[index].nome = tutorial.nome,
    db.data[index].titulo = tutorial.titulo,
    db.data[index].descricao = tutorial.descricao,
    db.data[index].texto = tutorial.texto,
    db.data[index].linkYoutube = tutorial.linkYoutube,
    db.data[index].autor = tutorial.autor,
    db.data[index].dataCriacao = tutorial.dataCriacao,
    db.data[index].categoria = tutorial.categoria,
    db.data[index].publicado = tutorial.publicado

    displayMessage("Tutorial alterado com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem('db_tutorial', JSON.stringify(db));
  return tutorial.nome;
}

function deleteTutorial(id) {
  // Filtra o array removendo o elemento com o id passado
  db.data = db.data.filter(function(element) { return element.id != id });

  displayMessage("Tutorial removido com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem('db_tutorial', JSON.stringify(db));
}