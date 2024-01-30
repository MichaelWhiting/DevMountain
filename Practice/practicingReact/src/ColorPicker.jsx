import { useState } from "react";

function ColorPicker(props) {
    const [bgColor, setBGColor] = useState(null);
    const [textColor, setTextColor] = useState(null);
    const [text, setText] = useState("");
    
    function updateBGColor(color) {
        setBGColor(color);
        document.querySelector("body").style.backgroundColor = bgColor;
    }

    function updateTextColor(color) {
        setTextColor(color);
        document.querySelectorAll("label").forEach((label) => {
            label.style.color = textColor;
        })
        document.querySelector(".dot").style.backgroundColor = color;
    }

    function updateText(text) {
        setText(text);
        document.querySelector("#displayText").innerText = text;
    }

    return (
        <>
            <div className="bgColorPicker">
                <label> Background-Color: </label>
                <input type="color" value={bgColor} onChange={e => updateBGColor(e.target.value)}></input>
            </div>
            <div>
                <label className="displayText">{text || "This will change to whatever color is selected "}</label>
                <input type="color" value={textColor} onChange={e => updateTextColor(e.target.value)}></input>
                <span class="dot"></span>
            </div>
            <div className="textColorPicker">
                <label>Text value: </label>
                <input type="text" placeholder="Change text here" onChange={e => updateText(e.target.value)}></input>
            </div>
        </>
    );
}

export default ColorPicker;