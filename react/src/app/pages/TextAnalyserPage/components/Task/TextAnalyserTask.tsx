import { FullAnalysis } from "../../../../../services/types/fullAnalysis"
import TextAnalyserTaskItem from "./TextAnalyserTaskItem"

type TaskItemsAnalysis = FullAnalysis["taskItems"]

function TextAnalyserTask(taskItemsAnalysis: TaskItemsAnalysis) {
  return (
    <div className="TextAnalyserTask-container">
      <div className="TextAnalyserTask-row">
        <TextAnalyserTaskItem
          label={"Most used character"}
          initValue={taskItemsAnalysis.mostUsedCharacter}
        ></TextAnalyserTaskItem>
        <TextAnalyserTaskItem
          label={"Most frequent word"}
          initValue={taskItemsAnalysis.mostUsedWord}
        ></TextAnalyserTaskItem>
        <TextAnalyserTaskItem
          label={"Averrage read time"}
          initValue={taskItemsAnalysis.averageReadingTime.toString()}
        />
        <TextAnalyserTaskItem
          label={"Longest anagram"}
          initValue={taskItemsAnalysis.longestAnagram}
        />
        <TextAnalyserTaskItem
          label={"Longest palindromic substring"}
          initValue={taskItemsAnalysis.longestPalindromicSubstring}
        />
      </div>
    </div>
  )
}

export default TextAnalyserTask
