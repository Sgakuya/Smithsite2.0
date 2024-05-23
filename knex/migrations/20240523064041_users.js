/* eslint-disable func-names */
exports.up = function (knex) {
    return knex.schema.createTable("User", (table) => {
      table.increments("id").primary();
      table.string("title");
      table.string("fname");
      table.string("lname");
      table.text("about");
      table.string("current_role");
      table.string("current_employer");
    });
  };
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("User");
  };
  