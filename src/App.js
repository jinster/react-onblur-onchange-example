import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [onBlurValue, updateOnBlurValue] = useState('');
  const [onChangeValue, updateOnChangeValue] = useState('');

  const onBlur = (event) => {
    updateOnBlurValue(event.target.value);
  }

  const onChange = (event) => {
    updateOnChangeValue(event.target.value);
  }

  return (
    <div className="App">
      <input onBlur={onBlur} onChange={onChange} /> 

      <div>
        Onblur value: {onBlurValue}
      </div>
      <div>
        Onchange value: {onChangeValue}
      </div>
    </div>
  );
}
