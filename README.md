# CRUD_React_Node_MySql

## Status: Concluído

### Funcionamento:
<p>1 - A api implementa CRUD completo para uma tabela em um banco de dados MySQL;</p>
<p>2 - Os endpoints de interação são: </p>
              <p> GET http://localhost:8800</p>
              <p> POST http://localhost:8080 body => {Dados em json}</p>
              <p> PUT http://localhost:8080/{id} body => {Dados em json}</p>
              <p> DELETE http://localhost:8080/{id}</p>
               

### Para executá-lo você precisará:
<p>1 - Carregar o banco de dados MySql q esta na raiz deste projeto;</p>
<p>2 - Digitar o seguinte comando no workbench do MySql:</p>
  ### alter user alter user 'root'@'localhost' identified with mysql_native_password by 'SUA SENHA DO USUARIO ROOT'; 
<p>3 - O banco de dados utilizado é o MySql, o backup do bando esta na raiz desete projeto, procure o arquivo .sql e restaure o banco;</p>
