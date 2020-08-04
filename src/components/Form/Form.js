import React, {useContext, useEffect, useState} from "react";
import "./Form.scss"
import RadioBtn from "./RadioBtn/RadioBtn";
import {API} from "../../utils/API";
import UploadForm from "./UploadForm/UploadForm";
import {useForm} from "react-hook-form";
import {Context} from "../../context/Context";
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {startLoading, stopLoading} from "../../redux/actions";

// eslint-disable-next-line
const phoneRegExp = /^[\\+]{0,1}380([0-9]{9})$/
// eslint-disable-next-line
const emailRegExp=/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
const Form = (props) => {
    const modal = useContext(Context)
    const dispatch=useDispatch()
    const loading=useSelector(state=>{
        return state.app.loading
    })
    const [positions, setPositions] = useState([])
    const [form, setForm] = useState({
        name: '', email: '', phone: ``,
        position_id: '', photo: null
    })

    useEffect(() => {
        API.getPosition().then(data => {
            if (data.success) {
                setPositions(data.positions)
            }
        })

    }, [])

    const registerHandler = () => {
        dispatch(startLoading)
        console.log(loading)
        const formData = new FormData()
        formData.append('name', form.name)
        formData.append('email', form.email)
        formData.append('phone', form.phone)
        formData.append('position_id', form.position_id)
        formData.append('photo', form.photo)

        API.getToken()
            .then(response=>{
               const token=response.data.token
            return token
        })
            .then(token=>{API.setNewUser(formData, token).then((response=>{
                const data =response.data
                if(data.success){
                        modal.showMessage(data.message)
                        modal.toggle()
                    dispatch(stopLoading)
                    console.log(loading)
                    }
        }))})

    }
    const handleImageChange = (e) => {
        setForm({...form, photo: e.target.files[0]})

    }
    const formChangeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})

    }
    const {register, handleSubmit, errors} = useForm({
        mode: "onBlur",
        reValidateMode:"onChange",

    })

    return (
        <div className=' row form__block' id="signup">
            <div>
                <div className="title"><h1>Register to get a work</h1></div>
                <div className=" col form">
                    <form onSubmit={handleSubmit(registerHandler)}>
                        <div className={`form__item`}>
                            <label htmlFor="name" className={`label `}>Name</label>
                            <input className={`${!!errors.name ? "error" : null}`}
                                   type="text"
                                   name="name"
                                   value={form.name}
                                   onChange={formChangeHandler}
                                   placeholder="Your name"
                                   ref={register({
                                       required:"Name is required",
                                       minLength:{value:2,message:"Name should be at least 2 characters"},
                                       maxLength:{value:60,message:"Name should be at most 60 characters"}})}/>
                            <p>{errors.name?.message}</p>
                        </div>
                        <div className="form__item">
                            <label htmlFor="email" className="label">Email</label>
                            <input type="email"
                                   name="email"
                                   value={form.email}
                                   onChange={formChangeHandler}
                                   placeholder="Your email"
                                   ref={register({
                                       required:"Email is required",
                                       minLength: {value:2,message:"Email should be at least 2 characters"},
                                       maxLength: {value:100,message:"Email should be at most 100 characters"},
                                       pattern:{value:emailRegExp,message:"Email is not correct"}
                                   })}/>
                            <p>{errors.email?.message}</p>
                        </div>
                        <div className="form__item">
                            <label htmlFor="phone" className="label">Phone number</label>
                            <input type="tel"
                                   maxLength={13}
                                   value={form.phone}
                                   name="phone"
                                   onChange={formChangeHandler}
                                   placeholder="+380-XX-XXX-XX-XX"
                                   ref={register({
                                       required:"Phone is required",
                                       minLength: {value:13,message:"Phone number should be 13 symbols"},
                                       maxLength: {value:13,message:"Phone number should be 13 symbols"},
                                       pattern: {value:phoneRegExp,message:"Phone number is not correct"}
                                   })}/>
                            <span className="hint">Enter your phone in open format +380-XX-XXX-XX-XX</span>
                            {errors.phone ? <p>{errors.phone.message}</p> : null}
                        </div>
                        <div className="form__item ">
                            <RadioBtn inputRef={register({
                                required:"Choose your position"
                            })} formChangeHandler={formChangeHandler}
                                      positions={positions}/>
                            <p>{errors.position_id?.message}</p></div>
                        <div className="form__item">
                            <label>Photo</label>
                            <UploadForm inputRef={register({
                                required:"User photo is required"
                            })} fileName={!!form.photo ? form.photo.name : ''}
                                        handleImageChange={handleImageChange}/>
                            <p>{errors.photo?.message}</p>
                        </div>
                        <Button  disabled={loading} label={'Sign Up Now'} type={'submit'}/>
                    </form>
                </div>
            </div>

        </div>

    )
}
export default Form