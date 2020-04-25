import React from 'react';

const FormControl = ({
  id,
  labelName,
  type,
  placeholder,
  isRequired,
  changeHandler,
}) => {
  return (
    <div className="m-linkForm__group">
      <label htmlFor={id}>{labelName}</label>
      <input
        id={id}
        className="m-linkForm__input"
        placeholder={placeholder}
        type={type}
        required={isRequired}
        onChange={changeHandler}
      />
    </div>
  );
};

export default FormControl;
