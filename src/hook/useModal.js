import {useState} from 'react'


export const useModal=()=>{
    const [isOpen,setIsShowing]=useState(false)
    const toggle=()=>{
        setIsShowing(!isOpen)
    }
    const [message,setMessage]=useState(null)
    const showMessage=(text)=>{
        setMessage(text)
    }
    const clearMessage=()=>{
        setMessage(null)
    }
    return {isOpen,toggle,message,showMessage,clearMessage}
}