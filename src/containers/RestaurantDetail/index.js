import React, {useState} from 'react';
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
import { connect } from 'react-redux'
import PopUp from '../../components/PopUpAddCart';

const RestaurantDetail = (props) => {
  const foodInfo = [
    {
      name: "Coxinha",
      description: "Descrição do burger Descrição do burger Descrição Descrição Des",
      price: 10,
      id: 1,
      photoUrl: "https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4.jpg",
      category: "Salgado"
    },
    {
      name: "Esfirra",
      description: "Descrição do burger Descrição do burger Descrição Descrição Des",
      price: 10,
      id: 2,
      photoUrl: "https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4.jpg",
      category: "Salgado"
    }
  ]

  const [showedPopUp, setShowedPopUp] = useState(false)
  const [actualId, setActualId] = useState("")

  const showPopUpAddCart = (id) => {
      if (showedPopUp === false) {
        setShowedPopUp(true)
        setActualId(id)
      } else {setShowedPopUp(false)} 
  }

  const popUp = showedPopUp ? (
    <PopUp
      showPopUpAddCart={showPopUpAddCart}
      actualId={actualId}
    />
  ) : (
    <div></div>
  )



const RestaurantDetail = props => {
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
      <PrincipalDish>Principais</PrincipalDish>
      <WrapperPrincipalDish>
        {foodInfo.map((food, index) => {
          return <FoodCard 
            key={index}
            foodInfo={food}
            showPopUpAddCart={showPopUpAddCart}
            amount={food.id === props.amount.itemId ? (props.amount.amount) : (null)}
          />
        })}
      </WrapperPrincipalDish>

      <SideDish>Acompanhamentos</SideDish>
      <WrapperSideDish>
        <FoodCard 
          foodInfo={foodInfo} 
          showPopUpAddCart={showPopUpAddCart}
        />
        <FoodCard 
          foodInfo={foodInfo} 
          showPopUpAddCart={showPopUpAddCart}
        />
      </WrapperSideDish>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  amount: state.requests.actualAmount,
  currentRestaurant: state.restaurants.selectRestaurant
})

export default connect(mapStateToProps, null)(RestaurantDetail)
