import express from 'express'
import db from '../service/getService.js'

const router = express.Router() 

router.get('/', async (resquest, response) => {
    try{
        const dados = await db.Linguagens()

        if(dados == 0){
            response.status(204).end();
        }else{
            response.status(200).json(dados)
        }

    }catch(error){
        response.status(500).send({erro:`${error}`})
    }
})

export default router