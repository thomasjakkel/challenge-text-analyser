import { Router } from "express"
import { countCharacters, countWords } from "../handlers/counters"

const router = Router()

router.post("/characters", countCharacters)
router.post("/words", countWords)

export default router
