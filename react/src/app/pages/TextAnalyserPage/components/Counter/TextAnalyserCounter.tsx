import React from "react"
import "./TextAnalyserCounter.css"
import TextAnalyserCounterItem from "./TextAnalyserCounterItem"
import { FullAnalysis } from "../../../../../services/types/fullAnalysis"

type CounterAnalysis = FullAnalysis["counters"]

function TextAnalyserCounter(countersAnalysis: CounterAnalysis) {
  return (
    <div className="TextAnalyserCounter-container">
      <div className="TextAnalyserCounter-row">
        <TextAnalyserCounterItem
          label={"Words"}
          initValue={countersAnalysis.countWords}
        />
        <TextAnalyserCounterItem
          label={"Unique words"}
          initValue={countersAnalysis.countUniqueWords}
        />
        <TextAnalyserCounterItem
          label={"Sentences"}
          initValue={countersAnalysis.countSentences}
        />
        <TextAnalyserCounterItem
          label={"Words of longest sentences"}
          initValue={countersAnalysis.countWordsInLongestSentence}
        />
        <TextAnalyserCounterItem
          label={"Characters"}
          initValue={countersAnalysis.countCharacters}
        />
        <TextAnalyserCounterItem
          label={"Lines"}
          initValue={countersAnalysis.countLines}
        />
        <TextAnalyserCounterItem
          label={"Number of anagrams"}
          initValue={countersAnalysis.countAnagrams}
        />
      </div>
    </div>
  )
}

export default TextAnalyserCounter
