import { knex } from "../../../../knex/knex";
import { createRouter } from "next-connect";
import { onError } from "../../../lib/middleware";

const router = createRouter();
router
    .get(async (req, res) => {
        const fetchedExperience = await knex("Experiences").where({id : req.query.id});
        if (fetchedExperience) {
            res.status(200).json(fetchedExperience[0]);
        } else {
            res.status(404).end(`No experience with id: ${req.query.id} found`);
        }
    })
    .put(async(req, res)=>{
        const {id, ...updatedExperience} = req.body;
        if(id !== parseInt(req.query.id, 10)){
            res.status(400).end(`URL and object does not match`);
        }
        const postedUpdate = await knex("Experiences").where({id : id}).update({id, ...updatedExperience},["id","position","company","start","stop", "info"]);

        res.status(200).json(postedUpdate[0]);
    });

export default router.handler({ onError });
