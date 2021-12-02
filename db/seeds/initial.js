
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("posts").insert([
        {
          user: "shinji_n",
          photo_url:
            "https://ibb.co/qCvRBmB",
        },
        {
          user: "shinji_n",
          photo_url:
            "https://ibb.co/Gngg5p2",
        },
        {
          user: "shinji_n",
          photo_url:
            "https://ibb.co/BfXhBjB",
        },
      ]);
    })
    .then(function () {
      return knex("comments")
        .del()
        .then(function () {
          return knex("comments").insert([
            { user: "shinji_n", text: "forget the time...", post_id: 1 },
            { user: "shinji_n", text: "it's very powerful!", post_id: 2 },
            { user: "shinji_n", text: "my favorite place", post_id: 3 },
          ]);
        });
    });
};
