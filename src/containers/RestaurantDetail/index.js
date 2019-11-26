import React from 'react';
import Header from '../../components/Header';
import { PrincipalDish, SideDish } from './styled';

const RestaurantDetail = () => {
  return (
    <div>
      <Header title={'Restaurante'} isArrowBackVisible={true} />
      <PrincipalDish>Principais</PrincipalDish>
      <div>
        <h4>Pratos Principais</h4>
      </div>
      <SideDish>Acompanhamentos</SideDish>
      <div>
        <h4>Acompanhamentos</h4>
      </div>
    </div>
  );
};

export default RestaurantDetail;
