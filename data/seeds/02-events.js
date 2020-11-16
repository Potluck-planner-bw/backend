
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, event_name: 'Fairmount Park Meet-Up', time: '12:00pm', address: 'Reservoir Dr, Philadelphia, PA 19119', dates: '11-20-20', guests: 'TJ, Alden, Jake, Cory', created: true, users_id: 1 },
      ]);
    });
};
