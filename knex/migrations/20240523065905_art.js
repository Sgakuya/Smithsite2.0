/* eslint-disable func-names */
exports.up = function (knex) {
    return knex.schema.createTable("Art", (table) => {
      table.increments("id").primary();
      table.string("tag");
      table.string("title");
      table.text("about");
      table.string("location");
      table.text("link");
    });
  };
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("Art");
  };