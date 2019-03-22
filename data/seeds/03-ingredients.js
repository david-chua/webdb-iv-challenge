
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredients_name: "eggs"},//1
        {ingredients_name: "butter"},//2
        {ingredients_name: "creme fresh"}, //3
        {ingredients_name: "chopped chives"},//4
        {ingredients_name: "kaiser roll - split"},//5
        {ingredients_name: "lump crabmeat - drained"},//6
        {ingredients_name: "swiss cheese"},//7
        {ingredients_name: "celery rib"},//8
        {ingredients_name: "mayonnaise"},//9
        {ingredients_name: "minced fresh parsley"},//10
        {ingredients_name: "seafood seasoning"},//11
        {ingredients_name: "paprika"}//12
      ]);
    });
};
