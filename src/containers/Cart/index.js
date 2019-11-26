import React from "react";
import { CartWrapper, DeliveryAdressContainer } from "./styled";
import {Typography} from "@material-ui/core";
import FoodCard from "../../components/FoodCard";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";

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
            <DeliveryAdressContainer>
                <Typography>

                </Typography>
                <Typography>
                    
                </Typography>
            </DeliveryAdressContainer>
            <FoodCard foodInfo={foodInfo}/>
            <FoodCard foodInfo={foodInfo}/>
            <NavBar />
        </CartWrapper>  
    )
}

export default Cart