import React from "react";
import Portal from "../Portal/Portal";
import Button from "../Button/Button";
import "./Modal.scss"


const Modal =({isOpen,toggle,message,clear})=>{

    const clickHandler=()=>{
        toggle()
        clear()
    }
    return(
        <>
            {isOpen&&
        <Portal>
        <div>
            <div className="modal__overlay">
                <div className="modal__window">

                    <div className="modal__body">
                        <div className="modal__header"><h1>Great</h1></div>
                        <hr/>
                        {message&&<p>{message}</p>}
                        <hr/>
                        <div className="modal__footer">
                            <Button label={'Great'} onClick={clickHandler}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </Portal>}
            </>
    )
}

Modal.propTypes={

}
Modal.defaulProps={

}



export default Modal