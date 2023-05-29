import express from 'express'
import accessController from '../controllers/AccessController.js'

const router = express.Router()

router.post('/login', accessController.login)

export default router