import { knex } from "../../../../knex/knex";
import { createRouter } from "next-connect";
import { onError } from "../../../lib/middleware";

const router = createRouter();
router
    .get(async(req, res)=>{
        const projects = await knex("Project");
        if(projects) {
            res.status(200).json(projects);
        }else {
            res.status(404).end(`No projects found`);
        }
    })
    


export default router.handler({ onError });
