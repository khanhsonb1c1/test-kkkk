import React, { useState } from 'react';
import PropTypes from 'prop-types';


function InputCheckbox(props: any) {
    const [isChecked, setChecked] = useState(props.checked || false);

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
        if (props.onChange) {
            props.onChange(!isChecked);
        }
    };


    return (
        <div className='input-checkbox'>

            <input type="checkbox" id={props.label}
                checked={isChecked}
                onChange={handleCheckboxChange} />

            <label htmlFor={props.label}>{props.label}</label>
        </div>
    );
}

export default InputCheckbox;