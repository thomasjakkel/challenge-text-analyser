import './TextAnalyserPage.css';
import TextAnalyserCounter from "./components/Counter/TextAnalyserCounter";
import React from 'react';
import TextAnalyserTextArea from "./components/TextArea/TextAnalyserTextArea";
import TextAnalyserTask from "./components/Task/TextAnalyserTask";
import SubmitButton from "./components/SubmitButton/SubmitButton";

function TextAnalyserPage() {
    return (
        <div className="TextAnalyserPage">
            <div className="TextAnalyserPage-body">
                <h2>Text Analyser Challenge</h2>
                <TextAnalyserCounter/>
                <TextAnalyserTextArea/>
                <SubmitButton/>
                <TextAnalyserTask/>
            </div>
        </div>
    );
}

export default TextAnalyserPage;