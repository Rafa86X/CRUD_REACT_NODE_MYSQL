# CRUD_React_Node_MySql

## Status: Concluído

### Funcionamento:
<p>1 - A api implementa CRUD completo para uma tabela em um banco de dados MySQL;</p>
<p>2 - Os endpoints de interação são: </p>
              <p> GET http://localhost:8800</p>
              <p> POST http://localhost:8080 body => {Dados em json}</p>
              <p> PUT http://localhost:8080/{id} body => {Dados em json}</p>
              <p> DELETE http://localhost:8080/{id}</p>
               

<h3>Carregando Banco de Dados MySQL:</h3>
<p>1 - Carregar o banco de dados MySql q esta na raiz deste projeto;</p>
<p>2 - Digitar o seguinte comando no workbench do MySql:<br>
alter user 'root'@'localhost' identified with mysql_native_password by 'SUA SENHA DO USUARIO ROOT';
</p>
<br>
<h3> Instalando as dependencias</h3>
<br>
<p>1 - Utilizando um terminal de comandos entre na pasta api e execute: npm install;</p>
<p>2 - Utilizando um terminal de comandos entre na pasta frontend e execute: npm install;</p>
<br>
<h3> Levantando os servidores da aplicaçao</h3>
<br>
<p>1 - Utilizando um terminal de comandos entre na pasta api e execute: yarn start;</p>
<p>2 - Utilizando um terminal de comandos entre na pasta frontend e execute: npm start;</p>



