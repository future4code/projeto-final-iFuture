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
            <IconImg src={props.page==="home" ? imgIcon.homeSelected : imgIcon.home} alt="home icon"/>
            <IconImg src={props.page==="cart" ? imgIcon.cartSelected : imgIcon.cart} alt="cart icon"/>
            <IconImg src={props.page==="profile" ? imgIcon.profileSelected : imgIcon.profile}  alt="profile icon"/>
        </MainNavDiv>
    )
}

export default NavBar


