import React from 'react';
import {useRoutes} from "./hook/routes.hook";
import {BrowserRouter} from "react-router-dom";
import {Context} from "./context/Context";
import {useModal} from "./hook/useModal";
import Modal from "./components/Modal/Modal";
import './App.scss';




const App = () => {

    const {toggle, isOpen,message,showMessage,clearMessage} = useModal()
    const routes = useRoutes()
    return (
        <Context.Provider value={{toggle,showMessage}}>
            <BrowserRouter>
                <div className="App">
                    <Modal isOpen={isOpen} toggle={toggle} message={message} clear={clearMessage} />
                    {routes}
                </div>
            </BrowserRouter>
        </Context.Provider>
    );
}

export default App;
