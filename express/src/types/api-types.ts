export type Paths = {
  "/counters/characters": { post: CountCharacters }
  /** @description Counting words. Use filter to specify which words should be counted */
  "/counters/words": { post: CountWords }
  "/counters/sentences": { post: CountSentences }
  "/counters/lines": { post: CountLines }
  "/counters/anagrams": { post: LongestAnagram }
  "/task-items/characters": { post: MostUsedCharacter }
  "/task-items/words": { post: MostUsedWord }
  "/task-items/reading-time": { post: AverageReadingTime }
  "/task-items/anagrams": { post: LongestAnagram }
  "/task-items/palindromes": {
    post: LongestPalindromicSubstring
  }
}

// Operations
// Why status code 200? -> https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#post-methods
export type CountCharacters = {
  response: number
  status: 200
}

export type CountWords = {
  response: number
  status: 200
}

export type CountSentences = {
  response: number
  status: 200
}
export type CountLines = {
  response: number
  status: 200
}
export type CountAnagrams = {
  response: number
  status: 200
}
export type MostUsedCharacter = {
  response: string
  status: 200
}

export type MostUsedWord = {
  response: string
  status: 200
}

export type AverageReadingTime = {
  response: number
  status: 200
}

export type LongestAnagram = {
  response: string
  status: 200
}
export type LongestPalindromicSubstring = {
  response: string
  status: 200
}
