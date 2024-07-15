import React from "react";
import "./TextAnalyserCounter.css"

type Props = {
    label: string,
    initValue: number;
}

function TextAnalyserCounterItem(props: Props) {

    return (
        <div className="TextAnalyserCounter-column">
            <div className="TextAnalyserCounter-headline">{props.label}</div>
            <div className="TextAnalyserCounter-value">{props.initValue}</div>
        </div>
    );
}

export default TextAnalyserCounterItem;