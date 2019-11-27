import React, { useState, useEffect } from 'react';
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
import PopUp from '../../components/PopUpAddCart';

const RestaurantDetail = props => {
  const foodInfo = [
    {
      name: 'Coxinha',
      description:
        'Descrição do burger Descrição do burger Descrição Descrição Des',
      price: 10,
      id: 1,
      photoUrl:
        'https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4.jpg',
      category: 'Salgado'
    },
    {
      name: 'Esfirra',
      description:
        'Descrição do burger Descrição do burger Descrição Descrição Des',
      price: 10,
      id: 2,
      photoUrl:
        'https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4.jpg',
      category: 'Salgado'
    }
  ];

  const [showedPopUp, setShowedPopUp] = useState(false);
  const [actualId, setActualId] = useState('');
  const [actualCategories, setActualCategories] = useState([]);

  useEffect(() => {
    const categoriesArray = [...actualCategories];
    if (props.currentRestaurant.products) {
      for (let product of props.currentRestaurant.products) {
        if (categoriesArray.indexOf(product.category) === -1) {
          categoriesArray.push(product.category);
          setActualCategories(categoriesArray);
        }
      }
    }
  }, []);

  console.log(actualCategories);

  const showPopUpAddCart = id => {
    if (showedPopUp === false) {
      setShowedPopUp(true);
      setActualId(id);
    } else {
      setShowedPopUp(false);
    }
  };

  const popUp = showedPopUp ? (
    <PopUp showPopUpAddCart={showPopUpAddCart} actualId={actualId} />
  ) : (
    <div></div>
  );

  const { currentRestaurant } = props;

  return (
    <Wrapper>
      {popUp}
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
      {actualCategories.map((category, i) => {
        return (
          <div>
            <PrincipalDish key={i}>{category}</PrincipalDish>;
            <WrapperPrincipalDish>
              {currentRestaurant.products.map((product, index) => {
                if (product.category === category) {
                  return (
                    <FoodCard
                      key={index}
                      foodInfo={product}
                      showPopUpAddCart={showPopUpAddCart}
                      amount={
                        product.id === props.amount.itemId
                          ? props.amount.amount
                          : null
                      }
                    />
                  );
                }
              })}
            </WrapperPrincipalDish>
          </div>
        );
      })}
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  amount: state.requests.actualAmount,
  currentRestaurant: state.restaurants.selectRestaurant
});

export default connect(mapStateToProps, null)(RestaurantDetail);
