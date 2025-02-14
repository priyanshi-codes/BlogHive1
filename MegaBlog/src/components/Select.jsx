import React,{useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor='{id}' className=''>
             </label>}
        <select className={`${className} w-full px-2 py-1 border border-gray-200 rounded-lg`} {...props}
        ref={ref}    
        id={id}>
            {options?.map((option)=>{
                <option key ={option} value={option}>
                    {option}
                </option>
            })}
            </select>
      
    </div>
  )
}

export default React.forwardRef(Select)
