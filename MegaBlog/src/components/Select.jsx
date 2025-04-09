import React, { useId } from 'react';

const Select = React.forwardRef(function Select(
  { options, label, className = '', ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && <label htmlFor={id} className="inline-block mb-1 pl-1">{label}</label>}
      <select 
        className={`${className} w-full px-2 py-1 border border-gray-200 rounded-lg`} 
        {...props}
        ref={ref}    
        id={id}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
