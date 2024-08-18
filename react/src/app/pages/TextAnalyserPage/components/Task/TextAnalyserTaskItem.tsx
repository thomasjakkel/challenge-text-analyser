import React from "react"
import "./TextAnalyserTask.css"

type Props = {
  label: string
  initValue: string
}

function TextAnalyserCounterItem(props: Props) {
  return (
    <div className="TextAnalyserTask-column">
      <span className="TextAnalyserTask-headline">{props.label}: </span>
      <span className="TextAnalyserTask-value">{props.initValue}</span>
    </div>
  )
}

export default TextAnalyserCounterItem
