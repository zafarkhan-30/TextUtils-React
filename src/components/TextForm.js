import React , {useState} from "react";

export default function TextForm(props) {
    const [text , setText] = useState('');
   
    const handelUpclick =  () => {
        console.log("inside handelUpclick");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase" , "success");
    }

    const handelLoclick =  () => {
        console.log("inside handelUpclick");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerCase" , "primary");
    }

    const handelClearclick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("text is now empty" , "danger");
    }
    const handelOnchange = (event) => {
        console.log("inside handelOnchange");
        setText(event.target.value)
    }
  return (
    <>
    <div className="container my-3" style={{color : props.mode === 'dark'? 'white' : 'black'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} id="mybox" style={{backgroundColor : props.mode === 'dark'? 'dark' : 'white' ,  color : props.mode === 'dark'? 'white' :'black'}} onChange={handelOnchange} rows="3"></textarea>
        <button className="btn btn-outline-success my-3 mx-2" onClick={handelUpclick}>Convert to Uppercase</button>
        <button className="btn btn-outline-primary my-3 mx-2" onClick={handelLoclick}>Convert to LoweCase</button>
        <button type="button" className="btn btn-outline-danger my-3 mx-2" onClick={handelClearclick}>Clear</button>
        {/* <button className="btn btn-primary my-3 mx-2 float-right" > Clear </button> */}

      </div>
    </div>
   
    <div className="container my-3" style={{color : props.mode === 'dark'? 'white' : 'black'}} >
        <h1>Your text summury</h1>
        <p>
            {text.split(" ").length} words and {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} minuts to read</p>
        <h3>Preview</h3>
        <p>
            {text}
        </p>
    </div>
    </>

  );
}
