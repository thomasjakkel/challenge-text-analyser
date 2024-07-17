import { CountCharacters } from "./types/api-types"
import { FullAnalysis } from "./types/fullAnalysis"
import { AnalyseText } from "./types/text-analyser.dto"

const url = "http://localhost:8000"
const body: AnalyseText = { text: "" }

const fetchData = async (endpoint: string, body: AnalyseText) => {
  const controller = new AbortController()
  const signal = controller.signal
  try {
    const response = await fetch(`${url}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal,
    })
    if (!response.ok) throw new Error(response.statusText)
    const data: CountCharacters["response"] = await response.json()
    return data.result
  } catch (error) {
    console.error(error)
  }
}

export const countCharacters = async () => {
  const result = await fetchData("/counters/characters", body)
  return result === undefined ? 0 : result
}

export const countWords = async () => {
  const result = await fetchData("/counters/words", body)
  return result === undefined ? 0 : result
}

export const countUniqueWords = async () => {
  const result = await fetchData("/counters/words?filter=unique", body)
  return result === undefined ? 0 : result
}

export const countWordsInLongestSentence = async () => {
  const result = await fetchData(
    "/counters/words?filter=in-longest-sentence",
    body
  )
  return result === undefined ? 0 : result
}

export const countSentences = async () => {
  const result = await fetchData("/counters/sentences", body)
  return result === undefined ? 0 : result
}

export const countLines = async () => {
  const result = await fetchData("/counters/lines", body)
  return result === undefined ? 0 : result
}

export const countAnagrams = async () => {
  const result = await fetchData("/counters/anagrams", body)
  return result === undefined ? 0 : result
}

export const mostUsedCharacter = async () => {
  const result = await fetchData("/task-items/characters", body)
  return result === undefined || typeof result === "number" ? "" : result
}

export const mostUsedWord = async () => {
  const result = await fetchData("/task-items/words", body)
  return result === undefined || typeof result === "number" ? "" : result
}

export const averageReadingTime = async () => {
  const result = await fetchData("/task-items/reading-time", body)
  return result === undefined ? 0 : result
}

export const longestAnagram = async () => {
  const result = await fetchData("/task-items/anagrams", body)
  return result === undefined || typeof result === "number" ? "" : result
}

export const longestPalindromicSubstring = async () => {
  const result = await fetchData("/task-items/palindromes", body)
  return result === undefined || typeof result === "number" ? "" : result
}

export const getFullAnalysis = async () => {
  const fullAnalysis: FullAnalysis = {
    counters: {
      countCharacters: await countCharacters(),
      countWords: await countWords(),
      countUniqueWords: await countUniqueWords(),
      countWordsInLongestSentence: await countWordsInLongestSentence(),
      countSentences: await countSentences(),
      countLines: await countLines(),
      countAnagrams: await countAnagrams(),
    },
    taskItems: {
      mostUsedCharacter: await mostUsedCharacter(),
      mostUsedWord: await mostUsedWord(),
      averageReadingTime: await averageReadingTime(),
      longestAnagram: await longestAnagram(),
      longestPalindromicSubstring: await longestPalindromicSubstring(),
    },
  }

  return fullAnalysis
}
