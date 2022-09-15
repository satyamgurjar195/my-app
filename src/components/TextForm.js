import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleLowClick=()=>{
        let newText=Text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case","success");
    }
    const handleUpClick = () => {
        setText("You have clicked handleUpClick")
        console.log("OnClick");
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value)
        
        console.log("OnChange");

    }
    const [Text, setText] = useState("Enter Text Here")
    return (
        <>
            <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label text">{props.label}</label>
                    <input style={{backgroundColor:props.mode==='light'?'white':'grey', color : props.mode==='light'?'black':'white'}} type="email" className="form-control " id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3" style={{color:props.mode==='light'?'black':'white'}}>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                    <textarea style={{backgroundColor:props.mode==='light'?'white':'grey', color : props.mode==='light'?'black':'white'}} className="form-control" value={Text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To Lowercase</button>

            </div>
            <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
                <h1> Summary of your Text</h1>
                <p> {Text.split(" ").length} Words {Text.length} Characters {Text.split("\n").length} Lines </p>
                <h2> Preview </h2>
                <p>{Text}</p>

            </div>
        </>
    )
}
