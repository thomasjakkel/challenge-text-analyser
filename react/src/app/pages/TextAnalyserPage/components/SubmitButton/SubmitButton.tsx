import "./SubmitButton.css"

type AnalysisTrigger = {
  analysisTrigger: () => void
}

const SubmitButton = ({ analysisTrigger }: AnalysisTrigger) => {
  return (
    <div className="SubmitButton-container">
      <button onClick={analysisTrigger}>Start analysis</button>
    </div>
  )
}

export default SubmitButton
