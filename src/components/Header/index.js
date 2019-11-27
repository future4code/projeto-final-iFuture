import React from 'react';
import { connect } from 'react-redux';
import { push, goBack } from 'connected-react-router';
import { routes } from '../../containers/Router';

import { Container, Title, StyledArrow } from './styled';

const Header = ({ title, isArrowBackVisible, goBackPage }) => {
  return (
    <Container>
      {isArrowBackVisible && <StyledArrow onClick={goBackPage} />}
      <Title>{title}</Title>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  goBackPage: () => dispatch(goBack())
});

export default connect(null, mapDispatchToProps)(Header);
