import React, {useState} from 'react'
export default function TextForm(props) {
    const [text, setText] = useState("enter text here");
    const handleUppClick = ()=>{
        //console.log("uppercase was clicked");
        //setText("you have handled on upperclick")
        setText(text.toUpperCase());
        props.showAlert(" Converted to upper case", "success");
    }
    const handleChange = (event)=>{
        //console.log("on change");
        setText(event.target.value);
    }
    const handleInvClick = ()=>{
      //console.log("uppercase was clicked");
      //setText("you have handled on upperclick")
      setText(text.split(" ").reverse().join(" "));
      props.showAlert(" The text is inversed", "success");
  }
    //text = "new text"; // wrong way
    // setText("new text"); // correct way
  return (
    <>
    <div className="container">
    <div className={`container text-${props.mode==='light'?'dark':'white'}`}>
    <h1>{props.heading}</h1>
    </div>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUppClick}>Conert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleInvClick}>Inverse text</button>
    </div>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`} >
      <h1>text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p> 
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
