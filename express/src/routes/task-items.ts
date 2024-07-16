import { Router } from "express"
import {
  averageReadingTime,
  longestAnagram,
  longestPalindromicSubstring,
  mostUsedCharacter,
  mostUsedWord,
} from "../handlers/task-items"
const router = Router()

router.post("/characters", mostUsedCharacter)
router.post("/words", mostUsedWord)
router.post("/reading-time", averageReadingTime)
router.post("/anagrams", longestAnagram)
router.post("/palindromes", longestPalindromicSubstring)

export default router
