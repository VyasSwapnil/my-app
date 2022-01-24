import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert('Converted to uppercase!', 'success');
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert('Converted to lowercase!', 'success');
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert('Text Cleared!', 'success');
  }
  const handleCopyClick = ()=>{
    let text = document.getElementById('myBox');
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied to Clipboard!', 'success');
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/); /*Js Rejects*/
    setText(newText.join(" "))
    props.showAlert('Extra spaces removed!', 'success');
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#13466e',color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length === 0}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} disabled={text.length === 0}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} disabled={text.length === 0}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick} disabled={text.length === 0}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} disabled={text.length === 0}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((item)=>{return item !== ''}).length} words, {text.length}, characters</p>
        <p>{0.008 * text.split(" ").filter((item)=>{return item !== ''}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>
  )
}
