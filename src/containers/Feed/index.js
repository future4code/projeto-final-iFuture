import React, { Fragment } from 'react';
import Header from '../../components/Header';
import FilterByCategory from '../../components/FilterByCategory/index';
import NavBar from '../../components/NavBar';

import {
  WrapperFixedComponents,
  IconSearch,
  BaseInput,
  ContainerSearch
} from './styled';
import RestaurantCard from '../../components/RestaurantCard';

const Feed = () => {
  return (
    <Fragment>
      <WrapperFixedComponents>
        <Header title={'Ifuture'} isArrowBackVisible={false} />
        <ContainerSearch>
          <IconSearch />
          <BaseInput placeholder="Restaurante" />
        </ContainerSearch>
        <FilterByCategory />
      </WrapperFixedComponents>
      <div>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
      <NavBar />
    </Fragment>
  );
};

export default Feed;
