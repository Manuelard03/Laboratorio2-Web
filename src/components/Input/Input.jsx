import React from 'react';

const Input = ({ type = 'email', placeholder, value, onChange, ...props }) => {
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
