import React from 'react';
import "./TextAnalyserCounter.css"
import TextAnalyserCounterItem from "./TextAnalyserCounterItem";

function TextAnalyserCounter() {
    return (
        <div className="TextAnalyserCounter-container">
            <div className="TextAnalyserCounter-row">
                <TextAnalyserCounterItem label={"Words"} initValue={0}/>
                <TextAnalyserCounterItem label={"Unique words"} initValue={0}/>
                <TextAnalyserCounterItem label={"Sentences"} initValue={0}/>
                <TextAnalyserCounterItem label={"Words of longest sentences"} initValue={0}/>
                <TextAnalyserCounterItem label={"Characters"} initValue={0}/>
                <TextAnalyserCounterItem label={"Lines"} initValue={0}/>
                <TextAnalyserCounterItem label={"Number of anagrams"} initValue={0}/>
            </div>
        </div>
    );
}

export default TextAnalyserCounter;