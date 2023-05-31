import express from 'express'

import dados from './controller/getController.js'

const router = express()

router.use('/dados', dados)

export default router