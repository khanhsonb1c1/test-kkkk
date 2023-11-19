import React, { useState } from 'react';
import "./style.css";


function InputField(props: any) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };


    return (
        <div className='input-field'>
            <input type="text" value={inputValue}
                onChange={handleInputChange} placeholder={props.placeholder} />
        </div>
    );
}

export default InputField;     