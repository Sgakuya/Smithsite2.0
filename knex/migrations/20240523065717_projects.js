/* eslint-disable func-names */
exports.up = function (knex) {
    return knex.schema.createTable("Projects", (table) => {
      table.increments("id").primary();
      table.string("title");
      table.text("info");
    });
  };
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("Projects");
  };