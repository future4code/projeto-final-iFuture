import React, { useEffect, Fragment } from 'react';
import Header from '../../components/Header';
import FilterByCategory from '../../components/FilterByCategory/index';
import NavBar from '../../components/NavBar';
import OrderInProgress from '../../components/OrderInProgress'
import {
  WrapperFixedComponents,
  IconSearch,
  BaseInput,
  ContainerSearch
} from './styled';
import RestaurantCard from '../../components/RestaurantCard';
import { getActiveOrder } from '../../actions'
import { connect } from 'react-redux'

const Feed = (props) => {

  useEffect(() => {
    props.getActiveOrder()
}, [])

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
      {props.actualOrder ? <OrderInProgress order={props.actualOrder}/> : null}
      <NavBar />
    </Fragment>
  );
};

const mapStateToProps =(state) =>({
  actualOrder: state.requests.actualOrder
})

const mapDispatchToProps =(dispatch) =>({
  getActiveOrder: ()=>dispatch(getActiveOrder())
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
