import React from "react";
import MainButtonComponent from '../../components/MainButton'
import PopUp from "../../components/PopUpAddCart";

const LoginPage = (props) => {

    const sayHello=()=>{
        console.log("hello")
    }

    return (
        <div>
        <PopUp/>
        <MainButtonComponent onButtonClick={sayHello} title="Registrar"/>
        </div>
    )
}

export default LoginPage


