/**
 * @jest-environment node
 *
 * Use Node environment for server-side tests to avoid loading browser libraries.
 * This needs to be the top comment in the file
 */
/* eslint-disable no-return-assign, no-param-reassign */
import { testApiHandler } from "next-test-api-route-handler";
import { knex } from "../../knex/knex";
import experiencesEndpoint from "../pages/api/experiences/index"
import experienceEndpoint from "../pages/api/experiences/[id]"
import projectsEndpoint from "../pages/api/projects/index"
import projectEndpoint from "../pages/api/projects/[id]"
import artsEndpoint from "../pages/api/art/index"
import artEndpoint from "../pages/api/art/[id]"

beforeAll(() =>
  // Ensure test database is initialized before an tests
  knex.migrate.rollback().then(() => knex.migrate.latest()),
);

afterAll(() =>
  // Ensure database connection is cleaned up after all tests
  knex.destroy(),
);

beforeEach(() =>
  // Reset contents of the test database
  knex.seed.run(),
);

describe("Portfolio App API tests", ()=>{
    // Duplicate art, experience, projects,
    // Getting/Updating/Creating/Deletion
})
