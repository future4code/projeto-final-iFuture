import React, { Fragment } from "react";
import Header from "../../components/Header";
import OrderInProgress from "../../components/OrderInProgress";
import FilterByCategory from "../../components/FIlterByCategory";

const Feed = () => {
  const order = {
    totalPrice: 20,
    restaurantName: "Habibs",
    createdAt: 1574659218053,
    expiresAt: 1574662818053
  };

  return (
    <Fragment>
      <Header  
        title={'Ifuture'}
        isArrowBackVisible={false}
      />
      <FilterByCategory />
      <OrderInProgress order={order} />
    </Fragment>
  );
};

export default Feed;
