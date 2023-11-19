import React from 'react';
import "./style.css"

function SubmitButton(props: any) {
    return (
        <div className='submit-button'>
            <button>{props.title}</button>
        </div>
    );
}

export default SubmitButton;