import React from "react";
import Banner from "../components/Banner/Banner";
import AboutMe from "../components/AboutMe/AboutMe";
import Users from "../components/Users/Users";
import Form from "../components/Form/Form";

const Content = (props) => {
    return (
        <>
            <Banner/>
            <AboutMe/>
            <Users/>
            <Form/>
        </>
    )
}

export default Content