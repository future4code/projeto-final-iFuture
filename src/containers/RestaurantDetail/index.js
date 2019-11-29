import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import {
  Wrapper,
  PrincipalDish,
  CardDiv,
  CardTitle,
  CardDatesContainers,
  CardDeliveryPriceRight,
  CardDeliveryTimeLeft,
  CardDeliveryAdress,
  CardDeliveryCategory,
  CardImage,
  WrapperPrincipalDish,
  ButtonContainer
} from './styled';
import FoodCard from '../../components/FoodCard/';
import { connect } from 'react-redux';
import PopUp from '../../components/PopUpAddCart';
import MainButtonComponent from '../../components/MainButton'
import { routes } from '../Router'
import { push } from 'connected-react-router';

const RestaurantDetail = props => {
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

  const showPopUpAddCart = id => {
    if (showedPopUp === false) {
      setShowedPopUp(true);
      setActualId(id);
    } else {
      setShowedPopUp(false);
    }
  };

  const filteredList = props.selectedProductList.filter(prod => {
    return prod.amount !== 0
  })


  const popUp = showedPopUp ? (
    <PopUp showPopUpAddCart={showPopUpAddCart} actualId={actualId} />
  ) : (
      <div></div>
    );

  const { currentRestaurant, selectedProductList } = props;

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
      {actualCategories.map((category, index) => {
        return (
          <div>
            <PrincipalDish key={index}>{category}</PrincipalDish>
            <WrapperPrincipalDish>
              {selectedProductList.map((product, index) => {
                if (product.category === category) {
                  return (
                    <FoodCard
                      key={index}
                      foodInfo={product}
                      showPopUpAddCart={showPopUpAddCart}
                    />
                  );
                }
              })}
            </WrapperPrincipalDish>

          </div>
        );
      })}
      <ButtonContainer>
        {filteredList.length > 0 && <MainButtonComponent onButtonClick={props.goToCart} title="Ver Carrinho" />}
      </ButtonContainer>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  amount: state.requests.actualAmount,
  currentRestaurant: state.restaurants.selectRestaurant,
  selectedProductList: state.restaurants.selectedProductList
});

const mapDispatchToProps = dispatch => ({
  goToCart: () => dispatch(push(routes.cart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetail);
