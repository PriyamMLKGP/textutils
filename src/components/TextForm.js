import React, { useState } from 'react';


export default function TextForm(props) {
// text is name of the variable, 
//set text is the function, and usestate is imported 
    const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showalert("Converted to uppercase","success");
    }
    const handlelowClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showalert("Converted to lowercase","success");
    }
    const handlevalidateClick=()=>{
        const rego=new RegExp(
            '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
         );
        //let newtext={text};
        if(rego.test(text)){
            setmessage("Valid")
            props.showalert("Valid","success");
        }
        else{
            setmessage("Invalid")
            props.showalert("Invalid","warning");
        }
    }
    const handleremovespaceClick=()=>{
        
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showalert("Spaces removed","success");
    }
    const handleclearClick=()=>{
        setText("")
        props.showalert("Text Cleared","warning");
    }
    const handleonchange=(event)=>{
        setText(event.target.value);
    }
    const copy=()=>{
        
        navigator.clipboard.writeText(text);
        props.showalert("Text copied","success");
    }
    //below is called use state hook
    const [text, setText] =useState('');
    const [message, setmessage] =useState('');
    // const length=()=>{
    //     var z=text.split(/ +/).join(" ")
    //     var y =text.slice(-1);
    //     var m=0;
    //     if(text.slice(0)==" ")(m=1)
    //     if(y==" "){
    //         return z.split(" ").length-1-1
    //     }
    //     return z.split(" ").length-1;
    // }
    //setText("new");//Correct way to change the text
    return (<>
        <div className="container-flex">
        <h1>{props.heading}
        </h1>
        <div className="mb-3">
            {/* here teh use of onchange is compulsory to prevent errors as
            state variable si passed as its value needs to be updated */}
            <textarea className="form-control my-3" onChange={handleonchange} style={{backgroundColor: props.mode==='light'?'black':'white', color:props.mode==='light'?'white':'black' }} value={text} id="myBox" placeholder='Place Your Text Here' rows="10" cols="20"></textarea>
            <button disabled={text.length===0} className="btn btn-info mx-2" onClick={handleUpClick}>Convert To Upper Case</button>
            <button disabled={text.length===0} className="btn btn-info mx-2" onClick={handlelowClick}>Convert To Lower Case</button>
            <button disabled={text.length===0} className="btn btn-success mx-2" onClick={handleclearClick}>Clear</button>
            <div className="valid">
            <button disabled={text.length===0} className="btn btn-warning my-2 mx-2" onClick={handlevalidateClick}>Validate Email</button>
            <p className='mx-2'>{message}</p>
            </div>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleremovespaceClick}>Remove Extra Space</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={copy}>Copy Text</button>
        </div>
    </div>
    <div class={`card border border-props.mode==='light'?'white':'success'`} style={{backgroundColor: props.mode==='light'?'white':'black', color:props.mode==='light'?'black':'white'}}>
  <div class="card-body">
    <div className="container my-3" >
            <h1>Your Text Summary</h1>
            <p> {text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words, {text.length} characters</ p>
            <p>{0.08*text.split(/\s+/).filter((element)=>{return element.length!=0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length===0?"Enter Something To Preview It Here":text}</p>
    </div></div>
</div>
</>
    
    );
}
