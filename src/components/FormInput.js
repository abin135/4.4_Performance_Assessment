import React from 'react';
import { useState } from 'react';

const FormInput = () => {
    const [textValue, setTextValue] = useState('');
  
    function handleForm(e) {
        setTextValue(e.target.value);
    };

    return (
        <div>
            <input type="text"
                value={textValue}
                onChange={handleForm}
                placeholder="Enter message"
            />
            <h2>Text Entered: {textValue}</h2>
        </div>
    );
}

export default FormInput;