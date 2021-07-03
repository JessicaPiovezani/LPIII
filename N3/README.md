# Trabalho prático individual N2

**Descrição problema:**
O trabalho prático da disciplina consiste em desenvolver uma aplicação/ferramenta utilizando
Node.JS para importar e exportar uma base de dados em CSV para o banco de dados MongoDB
e, posteriormente, realizar as operações de listagem, inserção, atualização e exclusão dos
registros que foram importados ou que o usuário deseja manipular manualmente por meio de
um formulário próprio.

**Base de dados escolhida:**
7) Produção de vinhos: https://www.kaggle.com/uciml/red-wine-quality-cortez-et-al-2009.



### 📋 Pré-requisitos

É necessário ter instalado o [Node.js](https://nodejs.org/en/download/) em seu computador, assim como criar uma base de dados [MongoBD Atlas](https://www.mongodb.com/cloud/atlas1).




### 🔧 Instalação

Realize o clone do projeto e depois execute o seguinte comando no terminal:
```
npm install
```

Verifique no arquivo package.json se os pacotes express.js, body-parser, express-handlebars, mongoose, fast-csv e fs foram instalados corretamente. Caso não constem no projeto execute o comando:

```
npm install --save express body-parser mongoose express-handlebars fast-csv fs
```

Por último, na pasta model do projeto, acesse o arquivo ExampleDB.js e informe a "connection string" no local sinalizado. Depois altere o nome deste arquivo para "db.js". 


## ⚙️ Executando a aplicação

Para realizar os testes basta acessar o link http://localhost:5000

Lembre-se de deixar a aplicação em execução através do comando
```
node server.js
```
