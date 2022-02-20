import React from 'react'

function Alert(props) {
    //crating a function to make first leter of alertType into capitel case
    const capitalize = (word) => {
        const lowerCase = word.toLowerCase(); //will convert whole word into lowercase
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1); // returns first char of word capital and through slice() except 1st char added remainig char to word in small char
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.alertType} alert-dismissible fade show`} role="alert">
            <strong> {capitalize(props.alert.alertType)} </strong> :  {props.alert.alertMessage}
        </div>
        /*The above line[ props.alert && ] means if props.alert(by default that is null but when calling 
            showAlert() passing values App.js) is not null then exicute part after && (this way is practiced 
            in react community alot) */
    )
}

export default Alert;
