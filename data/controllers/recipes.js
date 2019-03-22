const express = require('express');
const recipes = require('../helpers/recipesModel.js');

const server = express.Router();

const errorHelper = (status, message, res) => {
  res.status(status).json({err: message });
}

server.get('/', (req,res) => {
  recipes
    .get()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      return errorHelper(500, 'Internal Server Error', res);
    })
})

server.get('/:id', (req,res) => {
  const {id} = req.params;
  recipes
    .getRecipeById(id)
    .then(recipe => {
      
      console.log('dish', recipe)
      res.json(recipe);
    })
    .catch(err => {
      console.log(err)
      return errorHelper(500, 'Internal Server Error', res);
    })
})

server.post('/', (req,res) => {
  const newRecipe ={
    recipe_name: req.body.recipe_name,
    dishes_id: req.body.dishes_id
  }

  recipes
    .insert(newRecipe)
    .then(response => {
      console.log(response)
      res.json(response)
    })
    .catch(err => {
      console.log(err)
      return errorHelper(500, 'Internal Server Error', res);
    });
});

module.exports = server;
