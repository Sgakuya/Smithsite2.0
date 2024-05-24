import { knex } from "../../../../knex/knex";
import { createRouter } from "next-connect";
import { onError } from "../../../lib/middleware";

const router = createRouter();
router
    .get(async (req, res) => {
        const fetchedProject = await knex("Projects").where({id : req.query.id});
        if (fetchedProject) {
            res.status(200).json(fetchedProject[0]);
        } else {
            res.status(404).end(`No project with id: ${req.query.id} found`);
        }
    })
    .put(async(req, res)=>{
        const {id, ...updatedProject} = req.body;
        if(id !== parseInt(req.query.id, 10)){
            res.status(400).end(`URL and object does not match`);
        }
        const postedUpdate = await knex("Projects").where({id : id}).update({id, ...updatedProject},["id","title", "info"]);

        res.status(200).json(postedUpdate[0]);
    });

export default router.handler({ onError });
