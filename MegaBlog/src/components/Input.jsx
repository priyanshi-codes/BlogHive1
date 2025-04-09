import React,{useId} from 'react'

const Input = React.forwardRef( function Input({
  label,
  type='text',
  className='',
  ...props
},ref){

  const id = useId()
  return (
    <div className='w-full'>
      {label && <label
      className='inline-block mb-1 pl-1 htmlFor={id}'>
        {label}
        </label>
        }
        <input type={type} className={`${className} w-full px-2 py-1 border border-gray-200 rounded-lg`} {...props}
        ref={ref}
        id={id}
        />
    </div>
  )
})

export default Input

