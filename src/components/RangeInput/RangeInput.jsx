import React from 'react';

const RangeInput = ({ option, selectedValue, onChange }) => {
  return (
    <div>
      <input 
        type="range" 
        min={option.min} 
        max={option.max} 
        step={option.step} 
        value={selectedValue} 
        onChange={(e) => onChange(e.target.value)}
      />
      <label>{selectedValue} páginas</label>
    </div>
  );
};

export default RangeInput;
