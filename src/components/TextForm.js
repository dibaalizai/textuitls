import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () =>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleOnChange = (event) =>{
    setText(event.target.value);
    console.log("Uppercase was change");
  }


  const [text, setText] = useState('Enter text here 2');
  // text = "new text"; //wrong way to change the state
  // setText("new text"); //right way to change the state

  return (
    <div>
      <h1>{props.heading} - {text}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>

    </div>
  )
}
