
exports.up = function(knex) {
  return knex.schema.createTable("comments", (table) => {
    table.increments("id");
    table.string("user").notNullable();
    table.timestamp("posted_at").defaultTo(knex.fn.now());
    table.string("text").notNullable();
    table
      .integer("post_id")
      .notNullable()
      .references("id")
      .inTable("posts")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("comments");
};
