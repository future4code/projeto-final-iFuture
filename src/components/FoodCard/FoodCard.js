import React from "react";
import { StyledCard, StyledCardContent, StyledCardMedia } from "./styled";
import Typography from '@material-ui/core/Typography';


export const FoodCard = (props) => {
    return (
        <StyledCard>
            <StyledCardMedia
                image="/Burger.jpg"
                title="Food"
            />
            <StyledCardContent>
                <TypographyTitle 
                    component="h5" 
                    variant="h5" 
                    color="primary"
                >
                    Burger
                </TypographyTitle >
                <TypographyDescription 
                    variant="subtitle1" 
                    color="secondary"
                >
                    Descrição do burger
                </TypographyDescription>
                <TypographyValue 
                    variant="subtitle1" 
                    color="secondary"
                >
                    R$ 10,00
                </TypographyValue >
            </StyledCardContent>
        </StyledCard>
    )
}

export default FoodCard