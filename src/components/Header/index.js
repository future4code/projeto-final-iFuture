import React from 'react';
import { connect } from 'react-redux';
import { push, goBack } from 'connected-react-router';
import { routes } from '../../containers/Router';

import { Container, Title, StyledArrow } from './styled';

const Header = ({ title, isArrowBackVisible }, props) => {
  return (
    <Container>
      {isArrowBackVisible && <StyledArrow onClick={props.goBackPage} />}
      <Title>{title}</Title>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  goBackPage: () => dispatch(push(routes.feed))
});

export default connect(null, mapDispatchToProps)(Header);
