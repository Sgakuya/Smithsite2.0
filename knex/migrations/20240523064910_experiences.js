/* eslint-disable func-names */
exports.up = function (knex) {
    return knex.schema.createTable("Experiences", (table) => {
      table.increments("id").primary();
      table.string("position");
      table.string("company");
      table.date("start");
      table.date("stop");
      table.text("info");
    });
  };
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("Experiences");
  };