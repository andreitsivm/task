import React from "react";
import {Route} from "react-router-dom";
import Layout from "../HOC/Layout/Layout";
import Content from "../pages/Content";




export const useRoutes=()=>{

    return(<>
        <Route path="/"><Layout><Content/></Layout></Route>
        </>
    )
}