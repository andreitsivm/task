import React from "react";
import photo from "./../../../assets/photo-cover.svg"
import './UserCard.scss'


const UserCard = (props) => {

    const {users = []} = props.usersData
    return (<>
            {users.map((user, index) => {
                return <div key={index} className="card">
                    <div className="photo"><img src={user.photo ? user.photo : photo} alt=""/></div>
                    <div className="name overflow">{user.name}</div>
                    <div className="email overflow">{user.email}</div>
                    <div className="phone">{user.phone}</div>
                    <div className="position overflow">{user.position}</div>

                </div>
            })}</>
    )
}
export default UserCard