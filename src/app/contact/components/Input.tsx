import React from 'react';

interface InputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ name, label, type, placeholder }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2.5">
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          autoComplete="off"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default Input;
