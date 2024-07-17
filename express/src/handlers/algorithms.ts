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

const getUniqueWords = (words: string[]) => {
  return words.filter((elem, index, array) => {
    return index === array.indexOf(elem)
  })
}

const getAnagrams = (analyseText: string) => {
  const words = analyseText.trim().replace(/[.!?]/g, "").split(/\s+/g)
  const uniqueWords = getUniqueWords(words)
  const sortedUniqueWords = uniqueWords.map((word) => {
    return word.toLowerCase().split("").sort().join("")
  })

  // Get only duplicates -> abc abc abc acb returns abc abc (as there are three anagrams)
  return sortedUniqueWords.filter((elem, index, array) => {
    return index !== array.indexOf(elem)
  })
}
