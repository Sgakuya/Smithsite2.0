/* eslint-disable func-names */
/* eslint no-unused-vars: ["error", { "args": "none" }] */
const fs = require("fs");
exports.seed = function (knex) {
  const contents = fs.readFileSync("././data/seed.json");
  const data = JSON.parse(contents)[0]["contact"];
  // Deletes ALL existing entries
  // Use batch insert because we have too many articles for simple insert
  return knex("Contact").del()
    .then(() => knex.batchInsert("Contact", data, 5));
};

