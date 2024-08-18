export type FullAnalysis = {
  counters: {
    countCharacters: number
    countWords: number
    countUniqueWords: number
    countWordsInLongestSentence: number
    countSentences: number
    countLines: number
    countAnagrams: number
  }
  taskItems: {
    mostUsedCharacter: string
    mostUsedWord: string
    averageReadingTime: number
    longestAnagram: string
    longestPalindromicSubstring: string
  }
}
