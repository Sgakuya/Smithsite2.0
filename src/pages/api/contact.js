import { knex } from "../../../knex/knex";
import { createRouter } from "next-connect";
import { onError } from "../../lib/middleware";

const email = "smithgakuya@gmail.com";
const router = createRouter();
router
 .get(async (req, res) => {
   const myContactInfo = await knex("Contact").where({ email: email}).first();
   if (myContactInfo) {
     res.status(200).json(myContactInfo);
   } else {
   res.status(404).end(`No contact info with email ${email} found`);
 }
});

export default router.handler({ onError });

