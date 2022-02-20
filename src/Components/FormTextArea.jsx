import React, { useState } from 'react';

function FormTextArea(props) {
    const [text, setText] = useState("");
    const handleOnClick = (e) => {
        setText(e.target.value);
    }
    const convertToUpCase = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case.", "success");
    }
    const convertToLrCase = (e) => {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case.", "success");

    }
    const clearText = () => {
        setText(" ");
        props.showAlert("Text Cleared Completly.", "warning");

    }
    const converToCalmelCase = () => {
        const newText = text.replace(/([A-Z])/g, "$1"); //using regular expresion
        const camCaseText = newText.charAt(0).toUpperCase() + newText.slice(1);
        setText(camCaseText);
        props.showAlert("Text Converted to CamelCase.", "success");
        console.log(camCaseText);
    }
    const handleCopy = () => {
        let text = document.getElementById("myForm");
        text.select(); //to select all text
        navigator.clipboard.writeText(text.value); //The Clipboard interface's writeText() property writes the specified text string to the system clipboard. Text may be read back using either read() or readText().
        props.showAlert("Your Text Copied to Clipboard.", "success");

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        /*we used here regular expresion means removed all space between text and split function return an array 
        newText The split() method divides a String into an ordered list of substrings, puts these substrings 
        into an array, and returns the array. */
        setText(newText.join(" "));//join() add one space in new string
        props.showAlert("Extra Space in Your Text has been Removed.", "success");

    }
    /*
    var result = text.replace( /([A-Z])/g, " $1" );
var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    
    
    
    charAt(x)
charCodeAt(x)
concat(v1,v2..)
fromCharcode(c1,c2)
indexOf(substr, [start])
lastIndexOf(substr, [start])
JavaScript - javascript string function- Edurekamatch(regexp)
replace(regexp/substr, replacetext)
search(regexp)
slice(start, [end])
split(delimiter, [limit])
substr(start, [length])
substring(from, [to])
toLowerCase()
toUpperCase()
includes()
endsWith()
repeat()
valueOf()
trim()*/
    return (<>
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1> Enter the Text to Make Different Opperation </h1><hr />
            <div className=" input-group">
                <textarea className="form-control" id='myForm' value={text} onChange={handleOnClick}
                    style={
                        {
                            backgroundColor: props.mode === 'dark' ? '#524c6b' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black'
                        }
                    } aria-label="With textarea" rows={7}></textarea>
                {/* Note in above lines in style we used 1st {} for jsx 2nd for js-object and in 2nd {} we passed object for bg-colorand text-color*/}
            </div>
            <div >
                <button className="btn btn-dark mt-4 mx-1" onClick={convertToUpCase}>Convert to UpperCase</button>
                <button className="btn btn-dark mt-4 mx-1" onClick={convertToLrCase}>Convert to LowerCase</button>
                <button className="btn btn-dark mt-4 mx-1" onClick={clearText}>Clear Text</button>
                <button className="btn btn-dark mt-4 mx-1" onClick={converToCalmelCase}>Convert to CamelCase</button>
                <button className="btn btn-dark mt-4 mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-dark mt-4 mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
        </div> <hr />

        {/* end of ====================================================== 1st container  */}

        <div className="container my-4 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

            <h2>
                Your Text Summary Here
            </h2>

            <p >
                <b> You have {text.split(" ").length} Words and {text.length} characters in your Paragraph.</b>
            </p><hr />
            {/* The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. And .length will returns length of that array  */}
            <p >
                <b> {0.008 * text.split(" ").length} Minutes to read this your Text.</b>
            </p><hr />
            <h2> Text Preview </h2>
            {/* using some logic */}
            <p > {text.length > 0 ? text : "Enter Some Text in to Text Box Above to See Preview here."} </p>

        </div><hr /> {/* end of 2nd container */}
    </>)
}

export default FormTextArea;

