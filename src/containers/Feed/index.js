import React, { useEffect, Fragment } from 'react';
import Header from '../../components/Header';
import FilterByCategory from '../../components/FilterByCategory/index';
import NavBar from '../../components/NavBar';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import OrderInProgress from '../../components/OrderInProgress';

import {
  WrapperFixedComponents,
  IconSearch,
  BaseInput,
  ContainerSearch
} from './styled';
import RestaurantCard from '../../components/RestaurantCard';
import {
  fecthRestaurants,
  setSelectedRestaurantDetails
} from '../../actions/fetchRestaurants';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterIsSelected: false,
      selectedFilter: 'All'
    };
  }

  componentDidMount = () => {
    this.props.getAllRestaurants();
  };

  renderFilteredRestaurants = event => {
    if (this.state.selectedFilter === event.target.value) {
      this.setState({
        filterIsSelected: false,
        selectedFilter: 'All'
      });
    } else {
      this.setState({
        filterIsSelected: true,
        selectedFilter: event.target.value
      });
    }
  };

  render() {
    const { allRestaurants } = this.props;
    return (
      <Fragment>
        <WrapperFixedComponents>
          <Header title={'Ifuture'} isArrowBackVisible={false} />
          <ContainerSearch onClick={this.props.goToSearchPage}>
            <IconSearch />
            <BaseInput placeholder="Restaurante" />
          </ContainerSearch>
          <FilterByCategory
            onClick={this.renderFilteredRestaurants}
            isSelected={this.state.filterIsSelected}
          />
        </WrapperFixedComponents>
        <div>
          {this.state.filterIsSelected &&
            allRestaurants.map(restaurant => {
              if (restaurant.category === this.state.selectedFilter) {
                return (
                  <RestaurantCard
                    onClick={() => {this.props.getRestaurantDetail(restaurant.id)}}
                    key={restaurant.id}
                    logoUrl={restaurant.logoUrl}
                    name={restaurant.name}
                    deliveryTime={restaurant.deliveryTime}
                    shipping={restaurant.shipping}
                  />
                );
              } else {
                return null;
              }
            })}
          {!this.state.filterIsSelected &&
            allRestaurants.map(restaurant => {
              return (
                <RestaurantCard
                  onClick={() => {this.props.getRestaurantDetail(restaurant.id)}}
                  key={restaurant.id}
                  logoUrl={restaurant.logoUrl}
                  name={restaurant.name}
                  deliveryTime={restaurant.deliveryTime}
                  shipping={restaurant.shipping}
                />
              );
            })}
        </div>
        {this.props.actualOrder ? (
          <OrderInProgress order={this.props.actualOrder} />
        ) : null}
        <NavBar />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    allRestaurants: state.restaurants.allRestaurants
  };
};

const mapDispatchToProps = dispatch => ({
  goToSearchPage: () => dispatch(push(routes.search)),
  getAllRestaurants: () => dispatch(fecthRestaurants()),
  getRestaurantDetail: restaurantId =>
    dispatch(setSelectedRestaurantDetails(restaurantId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
