const express = require("express");
const cors = require("cors");
const { uuid } = require('uuidv4');


const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];



app.get("/repositories", (request, response) => {
  const { url } =  request.query

  const results = url
  ? repositories.filter(newRepo => newRepo.url.includes(url))
  : repositories

  return response.json(results);
}); 

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body
  
  const newRepo = { 
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  };

  repositories.push(newRepo);

  return response.json(newRepo);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const repository = repositories.findIndex(newRepo => newRepo.id === id)

  if(repository < 0) {
    return response.status(400).json({ error: 'Repository not found'});
  }

  const newRepo = {
    id,
    title,
    url,
    techs,
    likes: 0
  };

  repositories[repository] = newRepo;

  return response.json(newRepo);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const repository = repositories.findIndex(repository => repository.id === id);

  if(repository < 0) {
    return response.status(400).json({ error: 'Repository not found'});
  }

  repositories.splice(repository, 1);

  return response.status(200).json({ message: 'Repository deleted Success'});

});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repository = repositories.find(repository => repository.id === id);

  if(!repository) {
    return response.status(400).json({ error: 'Repository not found'});
  }
  

  repository.likes += 1;

    return response.json(repository)
});

module.exports = app;
