import React from "react";

import { Container, TitleWrapper, Title, StyledArrow } from "./styled";

const Header = ({
  title, 
  isArrowBackVisible,
  urlArrowBack
}) => {
  
  return (
    <Container>
      {isArrowBackVisible && (
        <StyledArrow 
        onClick={() => console.log(urlArrowBack)}
      />  
      )}
    <Title>{title}</Title>
    </Container>
  );
};

export default Header;
