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
  WrapperSideDish } from './styled';
import ImgTeste from '../../assets/imagem-teste.jpg';
import FoodCard from '../../components/FoodCard/';


const RestaurantDetail = () => {
  return (
    <Wrapper>
      <Header title={'Restaurante'} isArrowBackVisible={true} />
      <CardDiv>
        <CardImage src={ImgTeste} />
        <CardDatesContainers>
          <CardTitle>Bullguer Vila Madalena</CardTitle>
          <CardDeliveryCategory>Burguer</CardDeliveryCategory>
          <div>
            <CardDeliveryTimeLeft>30 - 50 min</CardDeliveryTimeLeft>
            <CardDeliveryPriceRight>Frete R$6,00</CardDeliveryPriceRight>
          </div>
          <CardDeliveryAdress>
            R. Fradique Coutinho, 1136 - Vila Madalena
          </CardDeliveryAdress>
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

export default RestaurantDetail;
