import { knex } from "../../../../knex/knex";
import { createRouter } from "next-connect";
import { onError } from "../../../lib/middleware";

const router = createRouter();
router
    .get(async (req, res) => {
        const fetchedArt = await knex("Art").where({id : req.query.id});
        if (fetchedArt) {
            res.status(200).json(fetchedArt[0]);
        } else {
            res.status(404).end(`No art piece with id: ${req.query.id} found`);
        }
    })
    .put(async(req, res)=>{
        const {id, ...updatedPiece} = req.body;
        if(id !== parseInt(req.query.id, 10)){
            res.status(400).end(`URL and object does not match`);
        }
        const postedUpdate = await knex("Art").where({id : id}).update({id, ...updatedPiece},["id","tag","title","about","location", "link"]);

        res.status(200).json(postedUpdate[0]);
    });

export default router.handler({ onError });
