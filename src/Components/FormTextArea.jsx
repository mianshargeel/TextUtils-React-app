import React, { useState } from 'react';

function FormTextArea(props) {
    const [text, setText] = useState("Please write here...");
    const handleOnClick = (e) => {
        setText(e.target.value);
    }
    const convertToUpCase = () => {
        const newText = text.toUpperCase();
        setText(newText);
    }
    const convertToLrCase = (e) => {
        const newText = text.toLowerCase();
        setText(newText);
    }
    const clearText = () => {
        setText(" ");
    }
    const converToCalmelCase = () => {
        const newText = text.replace(/([A-Z])/g, "$1"); //using regular expresion
        const camCaseText = newText.charAt(0).toUpperCase() + newText.slice(1);
        setText(camCaseText);
        console.log(camCaseText);
    }
    const handleCopy = () => {
        let text = document.getElementById("myForm");
        text.select(); //to select all text
        navigator.clipboard.writeText(text.value); //The Clipboard interface's writeText() property writes the specified text string to the system clipboard. Text may be read back using either read() or readText().

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        /*we used here regular expresion means removed all space between text and split function return an array 
        newText The split() method divides a String into an ordered list of substrings, puts these substrings 
        into an array, and returns the array. */
        setText(newText.join(" "));//join() add one space in new string
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
        <div className="container">
            <h1> Enter the <span className=" badge bg-secondary">Text</span> to Make Different Opperation </h1><hr />
            <div className=" input-group">
                <textarea className="form-control" id='myForm' value={text} onChange={handleOnClick} aria-label="With textarea" rows={7}></textarea>
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

        <div className="container my-4 ">

            <h2>
                Your<span className=" badge bg-secondary">Text</span>Summary Here
            </h2>

            <p className='text-white '>
                <b> You have {text.split(" ").length} Words and {text.length} characters in your Paragraph.</b>
            </p><hr />
            {/* The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. And .length will returns length of that array  */}
            <p className='text-white '>
                <b> {0.008 * text.split(" ").length} Minutes to read this your Text.</b>
            </p><hr />
            <h2>
                <span className=" badge bg-secondary">Text</span>Preview
            </h2>
            <p className='text-white'>
                {text}
            </p>

        </div><hr /> {/* end of 2nd container */}
    </>)
}

export default FormTextArea;

