import styled from "styled-components"
import {Typography, FormControl} from "@material-ui/core";


export const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const DeliveryAdressContainer = styled.div`
    background-color: #eeeeee;
    width: 100%;
    height: 76px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const DeliveryAdress = styled.span`
    color: #b8b8b8;
`

export const RestaurantAdress = styled.span`
    color: #b8b8b8;
`

export const WaitingTime = styled.span`
    color: #b8b8b8;
`

export const RestaurantDetailContainer = styled.div`
    width: 100%;
    height: 96px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const PriceContainer = styled.div`
    width: 100%;
    height: 76px;
    display: flex;
    flex-direction: column;
`

export const FreightPrice = styled(Typography)`
    margin-top: 25px;
    padding-left: 70%;
`

export const FinalPriceContainer = styled(Typography)`
    width: 100%;
    padding: 0 8%;
    display: flex;
    justify-content: space-between;
`

export const PaymentContainer = styled.div`
    width: 100%;
    margin-top: 10px;
    margin-bottom: 58px;
    display: flex;
    flex-direction: column;
    padding: 0 8%;
`
