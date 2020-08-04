import React from "react";
import style from "./Radio.module.scss"


const RadioBtn = (props) => {

    const {positions,inputRef} = props


    return (
        <div className={style.radio}>
            <p>Select your position</p>
            <div>
            {positions.map((position, index) => {
                return (
                    <div key={index} className={style.radio__btn}>
                        <input  ref={inputRef} type="radio"
                                onChange={props.formChangeHandler}
                               name="position_id"
                               value={position.id}/>
                        <label className={style.label} id="radio-btn" htmlFor={positions.id}>{position.name}</label>
                    </div>)
            })}</div>


        </div>
    )
}
export default RadioBtn