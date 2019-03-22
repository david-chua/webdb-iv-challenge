const express = require('express');
const dishes = require('../helpers/dishesModel.js');

const server = express.Router();

const errorHelper = (status, message, res) => {
  res.status(status).json({err: message });
}

server.get('/', (req,res) => {
  dishes
    .get()
    .then(dishes => {
      res.json(dishes);
    })
    .catch(err => {
      return errorHelper(500, 'Internal Server Error', res);
    })
})

server.get('/:id', (req,res) => {
  const {id} = req.params;
  dishes
    .getDishById(id)
    .then(dish => {
      let recipesList = dish.map(recipe => recipe.recipe_name)
      const dishInfo = {
        dish_name: dish[0].dish_name,
        dish_id: dish[0].id,
        recipes: recipesList
      }
      res.json(dishInfo);
    })
    .catch(err => {
      console.log(err)
      return errorHelper(500, 'Internal Server Error', res);
    })
})

server.post('/', (req,res) => {
  const newDish ={
    dish_name: req.body.dish_name
  }

  dishes
    .insert(newDish)
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
