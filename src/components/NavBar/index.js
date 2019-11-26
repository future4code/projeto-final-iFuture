import React, { useState } from "react";
import { MainNavDiv, IconImg } from './styled'

export const NavBar = props => {

    const [page, setPage] = React.useState('home');

    const handlePage = page => {
        setPage(page);
    };

    const imgIcon = {
        home: require('../../assets/homepage.svg'),
        cart: require('../../assets/cart.svg'),
        profile: require('../../assets/avatar.svg'),
        homeSelected: require('../../assets/homepageSelected.svg'),
        cartSelected: require('../../assets/shopping-cart.svg'),
        profileSelected: require('../../assets/avatarSelected.svg'),
    }

    return (
        <MainNavDiv>
            <IconImg src={imgIcon.homeSelected} alt="home icon"/>
            <IconImg src={imgIcon.cartSelected} alt="cart icon"/>
            <IconImg src={imgIcon.profileSelected}  alt="profile icon"/>
        </MainNavDiv>
    )
}

export default NavBar


