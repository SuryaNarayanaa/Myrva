import { sampleController } from '../controllers/sample.controller'
import {Router} from 'express'

const router = Router()

// Call The validate(ValidateSchema in Zod) if Needed
router.route("/sample").get(sampleController)

export default router