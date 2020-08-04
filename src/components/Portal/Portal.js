import React from "react";
import ReactDOM from "react-dom"

class Portal extends React.Component{

    element=document.createElement('div')
    componentDidMount() {
        document.body.appendChild(this.element)
    }
    componentWillUnmount() {
        document.body.removeChild(this.element)
    }


    render() {
            const {children}= this.props

        return ReactDOM.createPortal(children,this.element)
    }
}
export default Portal