import "./TextAnalyserPage.css"
import TextAnalyserCounter from "./components/Counter/TextAnalyserCounter"
import TextAnalyserTextArea from "./components/TextArea/TextAnalyserTextArea"
import TextAnalyserTask from "./components/Task/TextAnalyserTask"
import SubmitButton from "./components/SubmitButton/SubmitButton"
import { getFullAnalysis } from "../../../services/backendAPI"
import { FullAnalysis } from "../../../services/types/fullAnalysis"
import { useState } from "react"

const initAnalysis = {
  counters: {
    countCharacters: 0,
    countWords: 0,
    countUniqueWords: 0,
    countWordsInLongestSentence: 0,
    countSentences: 0,
    countLines: 0,
    countAnagrams: 0,
  },
  taskItems: {
    mostUsedCharacter: "",
    mostUsedWord: "",
    averageReadingTime: 0,
    longestAnagram: "",
    longestPalindromicSubstring: "",
  },
}
const WorkAround = () => {
  const [fullAnalysis, setFullAnalysis] = useState<FullAnalysis>(initAnalysis)

  const handleAnalysisTrigger = async () => {
    const textToAnalyse = document.getElementById("textAnalyserArea")?.innerHTML
    if (textToAnalyse === undefined) console.error("Analyse Text is undefined")
    const analysedText = await getFullAnalysis({
      text: textToAnalyse === undefined ? "" : textToAnalyse,
    })
    setFullAnalysis(() => analysedText)
  }
  return (
    <div className="TextAnalyserPage">
      <div className="TextAnalyserPage-body">
        <h2>Text Analyser Challenge</h2>
        <TextAnalyserCounter {...fullAnalysis?.counters} />
        <TextAnalyserTextArea />
        <SubmitButton analysisTrigger={handleAnalysisTrigger} />
        <TextAnalyserTask {...fullAnalysis?.taskItems} />
      </div>
    </div>
  )
}
function TextAnalyserPage() {
  return <WorkAround />
}

export default TextAnalyserPage
