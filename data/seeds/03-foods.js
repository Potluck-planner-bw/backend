
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {id: 1, food_item: 'Burgers', events_id: 1,  completed: true },
        {id: 2, food_item: 'Buns', events_id: 2, completed:  false },
        {id: 3, food_item: 'Macaroni Salad', events_id: 3, completed: true }
      ]);
    });
};
