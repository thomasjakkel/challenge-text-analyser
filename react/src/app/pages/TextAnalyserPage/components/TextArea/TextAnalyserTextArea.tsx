import React from 'react';
import "./TextAnalyserTextArea.css"

function TextAnalyserTextArea() {
    return (
        <div className="TextAnalyserTextArea-container">
            <div className="TextAnalyserTextArea-content">
                <textarea className="TextAnalyserTextArea-textarea" placeholder="Enter your text here..."></textarea>
            </div>
        </div>
    );
}

export default TextAnalyserTextArea;