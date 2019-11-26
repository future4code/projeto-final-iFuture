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
	order
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
      <ContainerTeste>
        <p>cópia navbar do footer</p>
      </ContainerTeste>
    </Wrapper>
  );
};

export default OrderInProgress;
