import React from "react";
import MainButtonComponent from '../../components/MainButton'
import RestaurantCard from "../../components/RestaurantCard";
import NavBar from "../../components/NavBar";

const SignUpPage = (props) => {

    return (
        <div>
        <RestaurantCard/>
        <RestaurantCard/>
        <MainButtonComponent title="boa"/>
        <NavBar/>
        </div>
    )
}

export default SignUpPage


