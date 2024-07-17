// Counters
export const countCharactersAlgorithm = (analyseText: string): number => {
  return analyseText.replace(/\s+/g, "").length
}

export const countWordsAlgorithm = (analyseText: string): number => {
  return analyseText.trim().split(/\s+/g).length
}

export const countUniqueWordsAlgorithm = (analyseText: string): number => {
  const words = analyseText.trim().split(/\s+/g)
  return getUniqueWords(words).length
}

export const countWordsInLongestSentenceAlgorithm = (
  analyseText: string
): number => {
  const sentences = analyseText.trim().split(/[.!?]/g)
  const max = sentences.sort((a, b) => {
    return countWordsAlgorithm(b) - countWordsAlgorithm(a)
  })
  return countWordsAlgorithm(max[0])
}

export const countSentencesAlgorithm = (analyseText: string): number => {
  const sentences = analyseText.trim().split(/[.!?]/g)
  let count = sentences.length
  sentences.indexOf("") > 0 ? count-- : count
  return count
}

export const countLinesAlgorithm = (analyseText: string): number => {
  return analyseText.trim().split(/\r\n|\r|\n/g).length
}

export const countAnagramsAlgorithm = (analyseText: string): number => {
  return getAnagrams(analyseText).length
}

// Task Items
export const mostUsedCharacterAlgorithm = (analyseText: string): string => {
  const charArray = analyseText
    .trim()
    .replace(/\s+/g, "")
    .toLocaleLowerCase()
    .split("")
    .sort()

  return getMaxElementsInSortedArray(charArray)
}

export const mostUsedWordAlgorithm = (analyseText: string): string => {
  const wordArray = analyseText
    .trim()
    .toLocaleLowerCase()
    .replace(/[.!?]/g, "")
    .split(/\s+/g)
    .sort()

  return getMaxElementsInSortedArray(wordArray)
}

export const averageReadingTimeAlgorithm = (analyseText: string) => {
  const averageReadingWordsPerMinute = 220
  return (
    Math.round(
      (countWordsAlgorithm(analyseText) / averageReadingWordsPerMinute) * 100
    ) / 100
  )
}

export const longestAnagramAlgorithm = (analyseText: string): string => {
  const anagrams = getAnagrams(analyseText).sort()
  const longestSortedAnagram = anagrams
    .sort((a, b) => a.length - b.length)
    .pop()

  if (longestSortedAnagram === undefined) return ""

  // We have longest anagram in a sorted state; lets find the first matching anagram with the anagram function
  const words = analyseText.trim().replace(/[.!?]/g, "").split(/\s+/g)
  const longestAnagram = words.find(
    (word) => getAnagrams(longestSortedAnagram + " " + word).length > 0
  )
  return longestAnagram === undefined ? "" : longestAnagram
}

export const longestPalindromicSubstringAlgorithm = (
  analyseText: string
): string => {
  const words = analyseText
    .trim()
    .toLocaleLowerCase()
    .replace(/[.!?]/g, "")
    .split(/\s+/g)
  const uniqueWords = getUniqueWords(words)

  // Find longest palindromic substring for each word
  const palindromicSubstrings = uniqueWords.map((word) =>
    getPalindromicSubstring(word)
  )
  const sortedPalindromicSubstrings = palindromicSubstrings.sort(
    (a, b) => b.length - a.length
  )

  const longestPalindromicSubstring = sortedPalindromicSubstrings[0]
  if (longestPalindromicSubstring === undefined) return ""

  // Check if first element is actually a palindrome and return
  return isPalindrome(longestPalindromicSubstring)
    ? longestPalindromicSubstring
    : ""
}

//Helper functions
const getUniqueWords = (words: string[]) => {
  return words.filter((elem, index, array) => {
    return index === array.indexOf(elem)
  })
}

const getAnagrams = (analyseText: string) => {
  const words = analyseText
    .trim()
    .toLowerCase()
    .replace(/[.!?]/g, "")
    .split(/\s+/g)
  const uniqueWords = getUniqueWords(words)
  const sortedUniqueWords = uniqueWords.map((word) => {
    return word.toLowerCase().split("").sort().join("")
  })

  // Get only duplicates -> abc abc abc acb returns abc abc (as there are three anagrams)
  return sortedUniqueWords.filter((elem, index, array) => {
    return index !== array.indexOf(elem)
  })
}

const getMaxElementsInSortedArray = (array: string[]): string => {
  const firstElement = array.shift()
  if (firstElement === undefined) return ""

  let maxElement: string = ""
  let maxCount: number = 0
  let currentElement: string = firstElement
  let currentCount: number = 1

  array.forEach((element) => {
    if (currentElement === element) {
      currentCount++
    } else {
      // Check if last element count is bigger than maxCount
      if (currentCount > maxCount) {
        maxCount = currentCount
        maxElement = currentElement
      }
      // Initialize current values
      currentElement = element
      currentCount = 1
    }
  })

  return maxElement
}

// props to: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-27.php
/**
 * Returns largest palindromic substring;
 * Otherwise empty string
 * @param {string} word
 * @returns {string}
 */
const getPalindromicSubstring = (word: string): string => {
  const length: number = Math.round(word.length / 2)

  let maxLength = 0
  let maxPalindrome = ""

  for (let i = 0; i < word.length; i++) {
    const subs = word.slice(i, word.length)

    // Iterate through each possible substring from the end of the current substring
    for (let j = subs.length; j >= 0; j--) {
      // Create a sub-substring from the beginning of the current substring to the current position
      let sub_subs_str = subs.slice(0, j)

      // Continue to the next iteration if the sub-substring has length 0 or 1
      if (sub_subs_str.length <= 1) continue

      // Check if the sub-substring is a palindrome using the is_Palindrome function
      if (isPalindrome(sub_subs_str)) {
        // If true, check if it has a longer length than the current maximum length
        if (sub_subs_str.length > maxLength) {
          // If true, update the maximum length and corresponding palindrome
          maxLength = sub_subs_str.length
          maxPalindrome = sub_subs_str
        }
      }
    }
  }

  // Return the longest palindrome found
  return maxPalindrome
}

const isPalindrome = (word: string) => {
  // Reverse the string and compare it with the original string
  const reversed = word.split("").reverse().join("")
  return word == reversed
}
