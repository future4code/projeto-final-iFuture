import React from "react";

import { 
	Wrapper,
	ContainerTeste,
	Rectangle,
	StatusOrder,
	RestaurantName,
	SubTotal,
	StyledClock,
	TextWrapper
} from "./styled";

const OrderInProgress = ({
	 order = {
    totalPrice: 20,
    restaurantName: "Habibs",
    createdAt: 1574659218053,
    expiresAt: 1574662818053,
  },

}) => {
  return (
    <Wrapper>
      <Rectangle>
				<StyledClock/>
				<TextWrapper>
        	<StatusOrder>Pedido em andamento</StatusOrder>
					<RestaurantName>{order.restaurantName}</RestaurantName>
					<SubTotal>SUBTOTAL R${order.totalPrice},00</SubTotal>
        </TextWrapper>
      </Rectangle>
    </Wrapper>
  );
};

export default OrderInProgress;
