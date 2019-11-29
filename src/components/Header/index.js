import React from 'react';
import { connect } from 'react-redux';
import {  goBack, push } from 'connected-react-router';
import { Container, Title, StyledArrow, StyledExitToAppIcon } from './styled';
import { routes } from '../../containers/Router';

const Header = ({ title, isArrowBackVisible, goBackPage, goToLogin, isExitVisible }) => {
  return (
    <Container>
      {isArrowBackVisible && <StyledArrow onClick={goBackPage} />}
      <Title>{title}</Title>
      {isExitVisible && <StyledExitToAppIcon onClick={goToLogin}/>}
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  goBackPage: () => dispatch(goBack()),
  goToLogin: () => dispatch(push(routes.login))
});

export default connect(null, mapDispatchToProps)(Header);
