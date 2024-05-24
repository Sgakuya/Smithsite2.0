import { knex } from "../../../../knex/knex";
import { createRouter } from "next-connect";
import { onError } from "../../../lib/middleware";

const router = createRouter();
router
    .get(async(req, res)=>{
        const artPieces = await knex("Art");
        if(artPieces) {
            res.status(200).json(artPieces);
        }else {
            res.status(404).end(`No art pieces found`);
        }
    })
    


export default router.handler({ onError });
