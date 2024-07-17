import { CountCharacters } from "./types/api-types"
import { FullAnalysis } from "./types/fullAnalysis"
import { AnalyseText } from "./types/text-analyser.dto"

const url = "http://localhost:8000"

const fetchData = async (endpoint: string, body: AnalyseText) => {
  try {
    const response = await fetch(`${url}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
    if (!response.ok) throw new Error(response.statusText)
    const data: CountCharacters["response"] = await response.json()
    return data.result
  } catch (error) {
    console.error(error)
  }
}

export const countCharacters = async (body: AnalyseText) => {
  const result = await fetchData("/counters/characters", body)
  return result === undefined ? 0 : result
}

export const countWords = async (body: AnalyseText) => {
  const result = await fetchData("/counters/words", body)
  return result === undefined ? 0 : result
}

export const countUniqueWords = async (body: AnalyseText) => {
  const result = await fetchData("/counters/words?filter=unique", body)
  return result === undefined ? 0 : result
}

export const countWordsInLongestSentence = async (body: AnalyseText) => {
  const result = await fetchData(
    "/counters/words?filter=in-longest-sentence",
    body
  )
  return result === undefined ? 0 : result
}

export const countSentences = async (body: AnalyseText) => {
  const result = await fetchData("/counters/sentences", body)
  return result === undefined ? 0 : result
}

export const countLines = async (body: AnalyseText) => {
  const result = await fetchData("/counters/lines", body)
  return result === undefined ? 0 : result
}

export const countAnagrams = async (body: AnalyseText) => {
  const result = await fetchData("/counters/anagrams", body)
  return result === undefined ? 0 : result
}

export const mostUsedCharacter = async (body: AnalyseText) => {
  const result = await fetchData("/task-items/characters", body)
  return result === undefined || typeof result === "number" ? "" : result
}

export const mostUsedWord = async (body: AnalyseText) => {
  const result = await fetchData("/task-items/words", body)
  return result === undefined || typeof result === "number" ? "" : result
}

export const averageReadingTime = async (body: AnalyseText) => {
  const result = await fetchData("/task-items/reading-time", body)
  return result === undefined ? 0 : result
}

export const longestAnagram = async (body: AnalyseText) => {
  const result = await fetchData("/task-items/anagrams", body)
  return result === undefined || typeof result === "number" ? "" : result
}

export const longestPalindromicSubstring = async (body: AnalyseText) => {
  const result = await fetchData("/task-items/palindromes", body)
  return result === undefined || typeof result === "number" ? "" : result
}

export const getFullAnalysis = async (body: AnalyseText) => {
  const fullAnalysis: FullAnalysis = {
    counters: {
      countCharacters: await countCharacters(body),
      countWords: await countWords(body),
      countUniqueWords: await countUniqueWords(body),
      countWordsInLongestSentence: await countWordsInLongestSentence(body),
      countSentences: await countSentences(body),
      countLines: await countLines(body),
      countAnagrams: await countAnagrams(body),
    },
    taskItems: {
      mostUsedCharacter: await mostUsedCharacter(body),
      mostUsedWord: await mostUsedWord(body),
      averageReadingTime: await averageReadingTime(body),
      longestAnagram: await longestAnagram(body),
      longestPalindromicSubstring: await longestPalindromicSubstring(body),
    },
  }

  return fullAnalysis
}
