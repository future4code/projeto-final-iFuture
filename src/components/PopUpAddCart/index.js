import React, { useState } from "react";
import { MainPopUpDiv, WhiteContainer, Text, SelectContainer, SelectStyled, SpanButton, SelectPickerStyled } from './styled'
import { connect } from 'react-redux'
import { setAmount } from '../../actions'

export const PopUp = props => {

  const [amount, setAmount] = React.useState(0);

  const handleChange = value => {
    setAmount(value);
  };

  const addAmountToCart = () => {
    const { setAmount } = props
    setAmount(amount)
  }

  const numbers = [
    {
      value: 1,
      label: 1
    },
    {
      value: 2,
      label: 2
    },
    {
      value: 3,
      label: 3
    },
    {
      value: 4,
      label: 4
    },
    {
      value: 5,
      label: 5
    },
    {
      value: 6,
      label: 6
    },
    {
      value: 7,
      label: 7
    },
    {
      value: 8,
      label: 8
    },
    {
      value: 9,
      label: 9
    },
    {
      value: 10,
      label: 10
    },
  ];

  return (
    <MainPopUpDiv>
      <WhiteContainer>
        <Text>Selecione a quantidade desejada</Text>
        <SelectPickerStyled
          value={amount}
          size="lg"
          onChange={handleChange}
          placeholder="0"
          searchable={false}
          data={numbers}
        />
        <SpanButton onClick={addAmountToCart}>ADICIONAR AO CARRINHO</SpanButton>
      </WhiteContainer>
    </MainPopUpDiv>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
  setAmount: (amount) => dispatch(setAmount(amount)),
})

export default connect(null, mapDispatchToProps)(PopUp)


