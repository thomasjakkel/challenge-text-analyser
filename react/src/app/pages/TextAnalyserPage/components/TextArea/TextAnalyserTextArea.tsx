import React, { useState } from "react"
import "./TextAnalyserTextArea.css"
import { useSearchParams } from "react-router-dom"

function TextAnalyserTextArea() {
  const [textValue, setTextValue] = useState("")

  return (
    <div className="TextAnalyserTextArea-container">
      <div className="TextAnalyserTextArea-content">
        <textarea
          id="textAnalyserArea"
          className="TextAnalyserTextArea-textarea"
          placeholder="Enter your text here..."
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default TextAnalyserTextArea
