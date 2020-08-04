import React, {useEffect} from "react";
import "./Users.scss"
import UserCard from "./UserCard/UserCard"
import {API} from "../../utils/API";
import {useDispatch, useSelector} from "react-redux";
import {setUsers} from "../../redux/actions";
import {useMediaQuery} from "react-responsive/src";


const Users = (props) => {
    const dispatch=useDispatch()
    const isMobile=useMediaQuery({query:'(max-width:767px)'})
    let usersCount=3
    if(!isMobile){
        usersCount=6;
    }


    useEffect(()=>{

        API.getUsers(1,usersCount).then(data=>{
            if(data.success){
                dispatch(setUsers(data))
            }
        }).catch((error)=>{
            console.log(error)
        })
    },[isMobile])

    const usersData=useSelector(state=>{
        return state.app.usersData
    })
    return (<div className="users__block" id="users">
        <div className="title"><h1>Our cheerful users</h1>
            <p>Attention! Sorting users by registration date</p></div>
        <div className="users">
            <UserCard  usersData={usersData}/>
        </div>
            <button className="btn primary-btn">Show more</button>
    </div>)
}
export default Users