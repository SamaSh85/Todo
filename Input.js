import React from 'react'
import { forwardRef } from 'react';
import "./style.css";

const Input=forwardRef(({value,onChange,placeholder,onKeyUp},ref)=>(
    <input 
    type="text"
    value={value}
    onchange={(e)=>onChange(e.target.value)}
    placeholder={placeholder}
    onkeyUp={onKeyUp}
    className="border-2 border-slate-300" 
   ref={ref}
    />
));


export default Input;