import TextAnalyserTaskItem from "./TextAnalyserTaskItem";

function TextAnalyserTask() {

    return (
        <div className="TextAnalyserTask-container">
            <div className="TextAnalyserTask-row">
                <TextAnalyserTaskItem label={"Most used character"} initValue={"e"}></TextAnalyserTaskItem>
                <TextAnalyserTaskItem label={"Most frequent word"} initValue={"is"}></TextAnalyserTaskItem>
                <TextAnalyserTaskItem label={"Averrage read time"} initValue={"~3min"}/>
                <TextAnalyserTaskItem label={"Longest anagram"} initValue={"(bed, deb)"}/>
                <TextAnalyserTaskItem label={"Longest palindromic substring"} initValue={"racecar"}/>
            </div>
        </div>

    );
}

export default TextAnalyserTask;