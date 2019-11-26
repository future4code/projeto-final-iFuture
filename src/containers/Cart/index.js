import React from "react";
import styled from "styled-components"
import FoodCard from "../../components/FoodCard";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";

const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Cart = (props) => {
    const foodInfo = {
        requestQuantity: 1,
        foodsName: "Burger",
        foodsDescription: "Descrição do burger Descrição do burger Descrição Descrição Des",
        foodsPrice: 10,
    }

    return (
        <CartWrapper>
            <Header 
                title={'Meu Carrinho'}
                isArrowBackVisible={false}
            />
            <FoodCard foodInfo={foodInfo}/>
            <FoodCard foodInfo={foodInfo}/>
            <NavBar />
        </CartWrapper>  
    )
}

export default Cart