import React from "react";
import "./Button.module.css"



const Button=({className,label, type,onClick,disabled})=>{
    return(
        <button disabled={disabled} className={className} onClick={onClick} type={type}>
            {label}
        </button>
    )
}
export default Button