import { knex } from "../../../knex/knex";
import { createRouter } from "next-connect";
import { onError } from "../../lib/middleware";

const router = createRouter();
router
 .get(async (req, res) => {
   const myContactInfo = await knex("Contact");
   if (myContactInfo) {
     res.status(200).json(myContactInfo[0]);
   } else {
   res.status(404).end(`No contact found`);
 }
})


export default router.handler({ onError });

