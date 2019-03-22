
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
     {recipes_id: 1, ingredients_id: 1, amount: 3, measurement: "whole"},
     {recipes_id: 1, ingredients_id: 2, amount: 1, measurement: "stick"},
     {recipes_id: 1, ingredients_id: 3, amount: 1, measurement: "teaspoon"},
     {recipes_id: 1, ingredients_id: 4, measurement: "dash"},
     {recipes_id: 2, ingredients_id: 5, amount: 2},
     {recipes_id: 2, ingredients_id: 6, amount: 6, measurement: "ounces"},
     {recipes_id: 2, ingredients_id: 7, amount: 4, measurement: "ounces cubed"},
     {recipes_id: 2, ingredients_id: 8, amount: 1},
     {recipes_id: 2, ingredients_id: 9, amount: .25, measurement: "cup"},
     {recipes_id: 2, ingredients_id: 10, amount: 1, measurement: "teaspoon"},
     {recipes_id: 2, ingredients_id: 11, amount: .25, measurement: "teaspoon"},
     {recipes_id: 2, ingredients_id: 12, amount: .25, measurement: "teaspoon"}
    ]);
  });
};
