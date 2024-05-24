import { knex } from "../../../../knex/knex";
import { createRouter } from "next-connect";
import { onError } from "../../../lib/middleware";

const router = createRouter();
router
    .get(async(req, res)=>{
        const experiences = await knex("Experiences");
        if(experiences) {
            res.status(200).json(experiences);
        }else {
            res.status(404).end(`No experiences found`);
        }
    })
    


export default router.handler({ onError });
