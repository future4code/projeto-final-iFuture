import React from "react";
import { Typography } from "@material-ui/core";
import { StyledCard, StyledCardContent, StyledCardMedia, 
    TypographyTitle, TypographyDescription, TypographyValue,
    RequestQuantityWrapper, AddRequestButton} from "./styled";


export const FoodCard = (props) => {
    // Fazer as informações serem passadas via props
    // Colocar lógica de condicional entre os botões de adicionar e remover pedidos

    return (
        <StyledCard>
            <StyledCardMedia
                image="/Burger.jpg"
                title="Food"
            />
            <StyledCardContent>
                <TypographyTitle 
                    component="h3" 
                    variant="subtitle1" 
                    color="primary"
                >
                    Burger
                </TypographyTitle >
                <RequestQuantityWrapper>
                    <TypographyValue 
                        color="primary"
                        variant="subtitle2" 
                        align="center"
                    >
                        2
                    </TypographyValue >
                </RequestQuantityWrapper>
                <TypographyDescription
                    component="p"  
                    variant="caption" 
                    color="initial"
                >
                    Descrição do burger
                </TypographyDescription>
                <TypographyValue 
                    component="p"  
                    variant="subtitle2" 
                    color="secondary"
                >
                    R$ 10,00
                </TypographyValue >
                <AddRequestButton>
                    <TypographyValue 
                        color="primary"
                        component="p"  
                        variant="caption" 
                        variant="subtitle2"
                        align="center" 
                    >
                        remover
                    </TypographyValue >
                </AddRequestButton>
            </StyledCardContent>
        </StyledCard>
    )
}

export default FoodCard