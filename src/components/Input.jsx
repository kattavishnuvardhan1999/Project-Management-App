import { forwardRef } from "react"

const Input = forwardRef(function Input({label,textarea,...props},ref) {
   
    return ( <p className="input-class">
        <label className="input-label">{label}</label>
        {textarea ? 
        (<textarea ref={ref} className="input-data" {...props}/>)
          : 
        ( <input ref={ref} className="input-data" {...props}/> )
        }
    </p>
    )
}); 

export default Input;