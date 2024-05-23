/* eslint-disable func-names */
exports.up = function (knex) {
    return knex.schema.createTable("Contact", (table) => {
      table.increments("id").primary();
      table.string("github");
      table.string("linkedin");
      table.string("phone");
      table.string("email");
    });
  };
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("Contact");
  };