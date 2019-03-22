
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
  {recipe_name: "Gordon Ramsey Scrambled Egg", dishes_id: 1},
  {recipe_name: "Delicious Crabmeat Boat", dishes_id: 2},
  {recipe_name: "David's Scrambled Egg", dishes_id: 1}
]);
    });
};
