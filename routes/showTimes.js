

import express from 'express'
import showTimeController from '../controllers/ShowTimeController.js'

const router = express.Router();

router.get('/getShowTimeByMovieId', showTimeController.getShowTimesByMovieId)
router.get('/:showTimeId', showTimeController.getShowTimeById)


export default router