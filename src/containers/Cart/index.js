import React from "react";
import { CartWrapper, DeliveryAdressContainer, DeliveryAdress, 
    RestaurantDetailContainer, RestaurantAdress, WaitingTime, 
    FreightPrice, FinalPriceContainer, PriceContainer, PaymentContainer } from "./styled";
import {Typography} from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FoodCard from "../../components/FoodCard";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import MainButtonComponent from "../../components/MainButton";
import { connect } from 'react-redux'

export const Cart = (props) => {
    const foodInfo = {
        foodsName: "Burger",
        foodsDescription: "Descrição do burger Descrição do burger Descrição Descrição Des",
        foodsPrice: 10,
    }

    const mainButtonName = "Confirmar"
    
    return (
        <CartWrapper>
            <Header 
                title={'Meu Carrinho'}
                isArrowBackVisible={false}
            />
            <DeliveryAdressContainer>
                <DeliveryAdress>
                    Endereço de entrega:
                </DeliveryAdress>
                <Typography
                    component="p"  
                    variant="subtitle2" 
                    color="secondary"
                >
                    Rua Alessandro Vieira, 42
                </Typography>
            </DeliveryAdressContainer>
            <RestaurantDetailContainer>
                <Typography
                    component="p"  
                    variant="subtitle2" 
                    color="primary"
                >
                    Bullger Vila Madalena 
                </Typography>
                <RestaurantAdress>
                    Rua Fradique Coutinho, 1136 - Vila Madalena
                </RestaurantAdress>
                <WaitingTime>
                    30 - 50 min
                </WaitingTime>
            </RestaurantDetailContainer>
            <FoodCard 
                foodInfo={foodInfo}
                amount={props.amount}  
            />
            <FoodCard foodInfo={foodInfo}/>
            <PriceContainer>
                <FreightPrice
                    component="p"  
                    variant="subtitle2" 
                    color="secondary"
                >
                        Frete R$ 6,00
                </FreightPrice>
                <FinalPriceContainer>
                    <Typography
                            component="p"  
                            variant="subtitle1" 
                            color="secondary"
                        >
                            SUBTOTAL 
                    </Typography>
                    <Typography
                            component="p"  
                            variant="subtitle1" 
                            color="primary"
                        >
                            R$ 26,00
                    </Typography>
                </FinalPriceContainer>
            </PriceContainer>
            <PaymentContainer>
                <Typography
                    component="p"  
                    variant="subtitle1" 
                    color="secondary"
                >
                    Forma de pagamento
                </Typography>
                <Divider 
                    color="secondary"
                />
                <FormControlLabel
                    control={<Checkbox  value="cash" />}
                    label="Dinheiro"
                />
                <FormControlLabel
                    control={<Checkbox  value="card" />}
                    label="Cartão de crédito"
                />
                <MainButtonComponent 
                    title={mainButtonName}
                />
            </PaymentContainer>
            <MainButtonComponent />
            <NavBar />
        </CartWrapper>  
    )
}

const mapStateToProps = (state) => ({
    amount: state.requests.actualAmount
})

export default connect(mapStateToProps, null)(Cart)