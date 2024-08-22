import React from 'react';

const CheckboxGroup = ({ options, selectedOptions = [], onChange }) => {
  if (!Array.isArray(selectedOptions)) {
    selectedOptions = [];
  }

  const handleCheckboxChange = (option) => {
    const isChecked = selectedOptions.includes(option.text);
    if (isChecked) {
      onChange(selectedOptions.filter(item => item !== option.text));
    } else {
      onChange([...selectedOptions, option.text]);
    }
  };

  return (
    <div>
      {options.map((option, index) => (
        <div key={index}>
          <input 
            type="checkbox" 
            id={option.text} 
            name="checkbox-group"
            checked={selectedOptions.includes(option.text)} 
            onChange={() => handleCheckboxChange(option)}
          />
          <label htmlFor={option.text} className="Checkbox-label">
            {option.image && <img src={option.image} alt={option.text} className="Checkbox-image" />}
            <span>{option.text}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
