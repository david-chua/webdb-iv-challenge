
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', tbl => {
    tbl.increments();
    tbl.string('measurement', 128)
    tbl.float('amount', 2)
    tbl
      .integer('recipes_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('ingredients_id')
      .unsigned()
      .references('id')
      .inTable('ingredients')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients');
};
