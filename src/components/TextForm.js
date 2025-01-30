import React,{useState} from 'react'
 
export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+ text)
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }

    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")
    
    }
    const handleClear=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Cleared Text","success")
    
    }

    const handleCopy=()=>{
        let text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success")
    
    }

    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed","success")
    

    }

    const handleUpChange=(event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
    const [text, setText] = useState("");

  return (
    <>
    <div className='container'  style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2 >{props.heading}</h2>
    <div className="mb-3">
    <textarea placeholder="Enter text here "className="form-control" value={text} onChange={handleUpChange} 
    style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'? 'white':'#042743'}} id="mybox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary mx-1" onClick={handleUpClick} >
            Convert to Uppercase
     </button>
     <button className="btn btn-primary mx-1" onClick={handleLowClick} >
        Convert to Lowercase
     </button>
     
     <button className="btn btn-primary mx-1" onClick={handleCopy} >
      Copy Text
     </button>
     <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >
      Remove Extra Spaces
     </button>
     <button className="btn btn-primary mx-1" onClick={handleClear} >
       Clear Text
     </button>
    </div>
    <div className="container my-2 "style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summery</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text:"Enter something in the Textbox to Preview..."}</p>
    </div>


    </>
  )
}
