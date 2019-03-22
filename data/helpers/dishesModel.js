const db = require('../dbConfig.js');

module.exports ={
  get: () => {
    return db('dishes');
  },

  getDishById: (id) => {
    let query = db('dishes')
    return query
      .select('dishes.id', 'dishes.dish_name','recipes.recipe_name')
      .from('dishes')
      .innerJoin('recipes', 'recipes.dishes_id', 'dishes.id')
      .where('dishes.id', id)
  },

  insert: function(newDish) {
    return db('dishes')
      .insert(newDish)
      .then(([id]) => this.getDishById(id));
  },
}
