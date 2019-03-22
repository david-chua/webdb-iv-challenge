const db = require('../dbConfig.js');

module.exports ={
  get: () => {
    return db('recipes');
  },
  // working code:
  getRecipeById: (id) => {
    let query = db('recipes')
    return query
      // .select('recipes.id', 'dishes.dish_name','recipes.recipe_name')
      // .from('recipes')
      .innerJoin('dishes', 'recipes.dishes_id', 'dishes.id')
      .innerJoin('recipe_ingredients', 'recipe_ingredients.recipes_id','recipes.id')
      .where('recipes.id', id)
      .innerJoin('ingredients', 'ingredients.id', 'recipe_ingredients.ingredients_id')

  },


  insert: function(newRecipe) {
    return db('recipes')
      .insert(newRecipe)
      .then(([id]) => this.getRecipeById(id));
  },
}
