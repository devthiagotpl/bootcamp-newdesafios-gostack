# bootcamp-newdesafios-gostack

=> Concluido
=> Testado 

Incluindo varios conhecimento com NodeJS como:

    - Conceitos de API Rest;
    - Métodos HTTP;
    - Query params e Route params;
    - CRUD;
    - Middlewares;
    - Arquitetura do Node;
    - Códigos de Resposta (1xx, 2xx, 3xx, 4xx e 5xx)
    - Teste de requisiçoes (TDD)
    
  # primeiro desafio do bootcamp goStack teve como objetivo:

objetivo desse desafio era armazenar repositórios do seu portfólio, 
que iria permitir a criação, listagem, atualização e remoção dos repositórios, 
e além disso permitindo que os repositórios poderiam receber "likes".

# INICIANDO A APLICAÇÂO

lembre-se de executar o comando <b>yarn</b> no seu terminal para instalar todas as dependências, e você terá algo parecido com isso:

https://raw.githubusercontent.com/Rocketseat/bootcamp-gostack-desafios/master/desafio-conceitos-nodejs/assets/nodejs-example.png


## Rotas da aplicação

Agora que você já está com o template clonado, e pronto para continuar, você deve abrir o arquivo app.js, e completar onde não possui código com o código para atingir os objetivos de cada rota.

 <b>POST http://localhost:3333/repositories</b> A Rota cria um repositories atraves das variaveis de ambiente { title, url, techs } e retorna o repository completo.

 <b>GET http://localhost:3333/repositories</b> A Rota lista todos os repositories to projeto.

 <b>PUT http://localhost:3333/repositories/:id</b> A Rota altera os dados do repositories através do id presente nos parametros da rota, e retorna a alteraçao.

 <b>DELETE http://localhost:3333/repositories/:id</b> A Rota deleta os repositories através do id presente nos paramentros da rota, e retorna se foi deletado com sucesso.

 <b>POST http://localhost:3333/repositories/:id/like</b> A rota aumenta o número de likes do repositório específico
                                                         escolhido através do id presente nos parâmetros da rota,
                                                         a cada chamada dessa rota, o número de likes é aumentado em 1;
                                                         
