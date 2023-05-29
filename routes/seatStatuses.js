import express from 'express'
import seatStatusController from '../controllers/SeatStatusController.js'
import accessController from '../controllers/AccessController.js'
const router = express.Router()

router.get('/getSeatStatusByShowTimeId', accessController.isLogged, seatStatusController.getSeatStatusByShowTimeId)
router.put('/updateSeatStatus', accessController.isLogged, seatStatusController.updateSeatStatus)

export default router