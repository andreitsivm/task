import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Layout.scss"





class Layout extends React.Component{



    render() {

        return(
            <>
                <header className="app-header">
                    <div className="container">
                        <Header/>
                    </div>
                </header>
                <main className="app-content">
                    <div className="container">
                        {this.props.children}
                    </div>
                </main>
                <footer className="app-footer">
                    <div className="container">
                        <Footer/>
                    </div>
                </footer>
            </>
        )
    }


}

export default Layout