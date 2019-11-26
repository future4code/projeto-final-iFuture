import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import { ProfileContainer, ProfileText, ProfileFlexDiv, AdressContainer, AdressTitle, HistoryContainer, HistoryTitleContainer, HistoryText, AddressText } from './styled'
import Edit from '@material-ui/icons/Edit';
import NavBar from '../../components/NavBar';
import CartCard from "../../components/CartCard";
import { connect } from 'react-redux'
import { getProfile, getOrders } from '../../actions/'

const ProfilePage = (props) => {

    useEffect(() => {
        props.getOrders()
        props.getProfile()
    }, [])

    const { actualProfile, allOrders } = props

    const listOrders = allOrders.map((order, index) => {
        return <CartCard
            key={index}
            title="Bullguer Vila Madalena"
            date="23 outubro 2019"
            price="67,00"
        />
    })

    return (
        <div>
            <Header isArrowBackVisible={false} title="Meu Perfil" />
            <ProfileContainer>
                <ProfileFlexDiv>
                    <ProfileText>{actualProfile.name}</ProfileText>
                    <Edit />
                </ProfileFlexDiv>
                <ProfileText>{actualProfile.email}</ProfileText>
                <ProfileText>{actualProfile.cpf}</ProfileText>
            </ProfileContainer>
            <AdressContainer>
                <ProfileFlexDiv>
                    <AdressTitle>Endereço Cadastrado</AdressTitle>
                    <Edit />
                </ProfileFlexDiv>
                <AddressText>{actualProfile.address}</AddressText>
            </AdressContainer>
            <HistoryTitleContainer>
                <ProfileText>Histórico de pedidos</ProfileText>
            </HistoryTitleContainer>
            <HistoryContainer>
                {listOrders.length > 0 ? listOrders : <HistoryText>Você não realizou nenhum pedido</HistoryText>}
            </HistoryContainer>

            <NavBar page="profile" />
        </div>
    )
}

const mapStateToProps = state => ({
    allOrders: state.requests.allOrders,
    actualProfile: state.requests.actualProfile,
})

const mapDispatchToProps = dispatch => ({
    getOrders: () => dispatch(getOrders()),
    getProfile: () => dispatch(getProfile()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)


