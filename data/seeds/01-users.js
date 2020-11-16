
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'TJ', password: 'password'},
        { id: 2, username: 'Jake', password: 'password'},
        { id: 3, username: 'Alden', password: 'password'}
      ]);
    });
};
