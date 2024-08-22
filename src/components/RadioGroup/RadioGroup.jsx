import React from 'react';

const RadioGroup = ({ options, selectedOption, onChange }) => {
  return (
    <div className="InputRadioGroup">
      {options.map((option, index) => (
        <div key={index} className="radio-option">
          <input 
            type="radio" 
            id={option.text} 
            name="answer" 
            value={option.text}
            checked={selectedOption.text === option.text} 
            onChange={() => onChange(option)}
          />
          <label htmlFor={option.text} className="radio-label">
            {option.image && <img src={option.image} alt={option.text} className="radio-image" />}
            <span>{option.text}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
