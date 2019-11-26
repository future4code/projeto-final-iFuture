import React from "react";
import { MainCardDiv, CardDiv, CardImage, CardTitle, CardDatesContainers, CardDeliveryPriceRight, CardDeliveryTimeLeft } from './styled'

const RestaurantCard = (props) => {
    return (
        <MainCardDiv>
            <CardDiv>
                <CardImage src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/11FB8C45-39CE-46F4-BA25-4AEBF76396BE.png" alt=""/>
                <CardTitle>Burguer</CardTitle>
                <CardDatesContainers>
                <CardDeliveryTimeLeft>30 - 50 min</CardDeliveryTimeLeft>
                <CardDeliveryPriceRight>Frete R$6,00</CardDeliveryPriceRight>
                </CardDatesContainers>

            </CardDiv>
        </MainCardDiv>
    )
}

export default RestaurantCard