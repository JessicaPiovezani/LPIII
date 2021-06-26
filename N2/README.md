# Trabalho prático individual N2

**Descrição problema:**
A Faculdade Cesusc irá realizar uma capacitação para uma grande empresa de Florianópolis,
especializada em gestão de recursos humanos. O treinamento será realizado em duas etapas e
as pessoas serão divididas em salas com lotação variável. Serão realizados, também, dois
intervalos de café em dois espaços distintos. A partir deste cenário, você foi contratado para
desenvolver o back-end do sistema que gerenciará este evento.

**Requisitos da entrega:**
Etapa 1: nesta etapa, você deve construir o código-fonte que contemple as seguintes operações
expostas como endpoints, utilizando o estilo arquitetural REST, de modo que a aplicação possa:

• Realizar o cadastro de pessoas, com nome e sobrenome.

• Realizar a consulta de uma pessoa pelo nome.

• Realizar a remoção de uma pessoa pelo id.

• Realizar a listagem de todas as pessoas.

• Realizar o cadastro das salas do evento, com nome e lotação.

• Realizar a consulta de uma sala específica pelo id.

• Realizar a alteração do nome e da lotação de uma sala específica.



### 📋 Pré-requisitos

É necessário ter instalado o [Node.js](https://nodejs.org/en/download/) em seu computador, assim como criar uma base de dados [MongoBD Atlas](https://www.mongodb.com/cloud/atlas1).




### 🔧 Instalação

Realize o clone do projeto e depois execute o seguinte comando no terminal:
```
npm install
```

Verifique no arquivo package.json se os pacotes express.js, body-parser, mongoose e ejs foram instalados corretamente. Caso não constem no projeto execute o comando:

```
npm install --save express body-parser mongoose ejs
```

Por último, na pasta config do projeto, acesse o arquivo ExampleDB.js e informe a "connection string" no local sinalizado. Depois altere o nome deste arquivo para "db.js". 


## ⚙️ Executando os testes

Para realizar os testes você irá precisar de uma aplicação que permita a realização de testes com requisições HTTP, como POST, GET e PUT. A recomendação é a utilização do [Postman](https://www.postman.com/).

Lembre-se de deixar a aplicação em execução através do comando
```
node app.js
```

### ⌨️ Exemplos de testes

#### Utilizando o método POST:
Rota: http://localhost:5000/api/client

Envio de dados no formato JSON:
```
{
    "name": "Fulano",
    "lastName": "Souza"
}
```
O retorno do banco de dados deverá ser algo parecido com:
```
{
    "_id": "60aebdc891a29223e4127ceb",
    "name": "Fulano",
    "lastName": "Souza",
    "__v": 0
}
```

Rota: http://localhost:5000/api/room

Envio de dados:
```
{
    "name": "Sala 01",
    "capacity": "25"
}
```
O retorno do banco de dados deverá ser algo parecido com:
```
{
    "_id": "60aebeae91a29223e4127cec",
    "name": "Sala 01",
    "capacity": 25,
    "__v": 0
}
```


#### Utilizando o método GET:

Rota: http://localhost:5000/api/listClients

O retorno do banco de dados deverá ser um Array com a lista de todos os clientes cadastrados.
```
[
    {
        "_id": "60aea3c57d4a7e430c2f21a4",
        "name": "Ciclano",
        "lastName": "Silva",
        "__v": 0
    },
    {
        "_id": "60aebdc891a29223e4127ceb",
        "name": "Fulano",
        "lastName": "Souza",
        "__v": 0
    }
]
```

Rota: http://localhost:5000/api/listRoom/60ae9feec7a60b46c0618678

O retorno do banco de dados deverá ser algo parecido com:
```
{
    "_id": "60ae9feec7a60b46c0618678",
    "name": "Sala 01",
    "capacity": 25
}
```


#### Utilizando o método PUT:

Rota: http://localhost:5000/updateRoom/60ae9feec7a60b46c0618678

Envio dos novos dados desejados para o cadastro no formato JSON:
```
{
    "name": "Sala 01",
    "capacity": "30"
}
```
O retorno do banco de dados deverá ser algo parecido com:
```
{
    "_id": "60ae9feec7a60b46c0618678",
    "name": "Sala 01",
    "capacity": 30,
    "__v": 0
}
```


#### Utilizando o método DELETE:

Rota: http://localhost:5000/updateRoom/60aea3c57d4a7e430c2f21a4

O retorno do banco de dados deverá ser os dados do cadastro deletado:
```
{
    "_id": "60aea3c57d4a7e430c2f21a4",
    "name": "Ciclano",
    "lastName": "Silva",
    "__v": 0
}
```
