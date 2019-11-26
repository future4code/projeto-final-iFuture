import React, { useState } from "react";
import { MainCartCardDiv, CardTitle, CardDate, CardPrice } from './styled'

export const CartCard = props => {

    return (
        <MainCartCardDiv>
            <CardTitle>{props.title}</CardTitle>
            <CardDate>{props.date}</CardDate>
            <CardPrice>SUBTOTAL R${props.price}</CardPrice>
        </MainCartCardDiv>
    )
}

export default CartCard


