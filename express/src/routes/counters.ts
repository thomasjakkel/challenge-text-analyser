import { Router } from "express"
import {
  countAnagrams,
  countCharacters,
  countLines,
  countSentences,
  countWords,
} from "../handlers/counters"

const router = Router()

router.post("/characters", countCharacters)
router.post("/words", countWords)
router.post("/sentences", countSentences)
router.post("/lines", countLines)
router.post("/anagrams", countAnagrams)

export default router
