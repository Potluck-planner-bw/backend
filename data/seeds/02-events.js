
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, event_name: 'Fairmount Park Meet-Up', time: '12:00pm', address: 'Reservoir Dr, Philadelphia, PA 19119', dates: '11-20-20', guests: 'TJ, Alden, Jake, Cory', description: 'Fairmount Park is the largest municipal park in Philadelphia', items: 'Computer, TV, Salad', yesList: '', noList: '', created: true, users_id: 1 },
        {id: 2, event_name: 'Thanksgiving Food Drive 2020', time: '10:00am', address: 'Phoenix, Arizona', dates: '11-20-20', guests: 'TJ, Alden, Jake, Cory', description: 'The safest way to celebrate Thanksgiving this year is to celebrate with people in your household.', items: 'Broccoli, Hot Dogs, Camera', yesList: '', noList: '', created: true, users_id: 2 },
      ]);
    });
};
