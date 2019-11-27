import React from 'react';
import Header from '../../components/Header';
import {
  Wrapper,
  PrincipalDish,
  SideDish,
  CardDiv,
  CardTitle,
  CardDatesContainers,
  CardDeliveryPriceRight,
  CardDeliveryTimeLeft,
  CardDeliveryAdress,
  CardDeliveryCategory,
  CardImage,
  WrapperPrincipalDish,
  WrapperSideDish
} from './styled';

import FoodCard from '../../components/FoodCard/';
import { connect } from 'react-redux';

const RestaurantDetail = props => {
  const { currentRestaurant } = props;
  return (
    <Wrapper>
      <Header title={'Restaurante'} isArrowBackVisible={true} />
      <CardDiv>
        <CardImage src={currentRestaurant.logoUrl} />
        <CardDatesContainers>
          <CardTitle>{currentRestaurant.name}</CardTitle>
          <CardDeliveryCategory>
            {currentRestaurant.category}
          </CardDeliveryCategory>
          <div>
            <CardDeliveryTimeLeft>
              {currentRestaurant.deliveryTime}min
            </CardDeliveryTimeLeft>
            <CardDeliveryPriceRight>
              Frete R${currentRestaurant.shipping},00
            </CardDeliveryPriceRight>
          </div>
          <CardDeliveryAdress>{currentRestaurant.address}</CardDeliveryAdress>
        </CardDatesContainers>
      </CardDiv>

      <PrincipalDish>Principais</PrincipalDish>
      <WrapperPrincipalDish>
        <FoodCard />
        <FoodCard />
      </WrapperPrincipalDish>

      <SideDish>Acompanhamentos</SideDish>
      <WrapperSideDish>
        <FoodCard />
        <FoodCard />
      </WrapperSideDish>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    currentRestaurant: state.restaurants.selectRestaurant
  };
};

export default connect(mapStateToProps, null)(RestaurantDetail);
