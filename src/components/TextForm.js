import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick1 = ()=>{
        // console.log("UpperCase was Clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleUpClick2 = ()=>{
        // console.log("UpperCase was Clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    // let converted_text = '';
    const handleUpClick3 = ()=>{
        // console.log("UpperCase was Clicked"+text);
        let str = text.toLowerCase().split(' ');
        for(let i=0;i<str.length;i++){
            if(str[i].indexOf("\n") > -1){
                str[i] = str[i].split("\n").map(text => text.length > 0? text.charAt(0).toUpperCase() + text.substring(1) : '').join("\n");
            }
            else{
                str[i] = str[i].charAt(0).toUpperCase()+str[i].substring(1);
            }
        }
        let newText = str.join();
        // let newText = text[0].toUpperCase();
        setText(newText);
    }
    const handleUpClick4 = ()=>{
        let newText = (' ');
        setText(newText);
    }
    const handleUpCopy =()=>{
        let copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        alert("Copied The Text : " + copyText.value);
    }

    const handleExtraSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(""));
    }
    const handleOnChange = (event)=>{
        // console.log("On Changed");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
//   setText("kdsfksdf"); //correct way to change the state
//   text = "new text"; //wrong way to change the state
  return (
    <>
    <div className='container'> 
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-dark " onClick={handleUpClick1}>Uppercase</button>
        <button className="btn btn-success mx-1" onClick={handleUpClick2}>Lowercase</button>
        <button className="btn btn-danger" onClick={handleUpClick3}>TitleCase</button>
        <button className="btn btn-warning mx-1" onClick={handleUpClick4}>ClearText</button>
        <button className="btn btn-info mx-1" onClick={handleUpCopy}>CopyText</button>
        <button className="btn btn-secondary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-3">
        <p>{text.split("").length} Words || {text.length} Characters || {0.008 * text.split("").length} Minutes read</p>
        <h2 className='badge rounded-pill bg-warning text-dark'>Preview</h2>
    </div>
    <div className="container">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
    </div>
    </>
  )
}
