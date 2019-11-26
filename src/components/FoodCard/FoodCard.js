import React from "react";
import { StyledCard, CardContent, StyledCardMedia, 
    TypographyTitle, TypographyDescription, TypographyValue,
    RequestQuantityWrapper, AddRequestButton} from "./styled";


export class FoodCard extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            addRequestButton: true,
        }
    }

    onClickAddRequestButton = () => {
        this.setState ({addRequestButton: !this.state.addRequestButton})
    }
    
    render () {
        const renderedButton = this.state.addRequestButton ? (
            <TypographyValue 
                color="secondary"
                component="p"  
                variant="caption" 
                align="center" 
            >
                adicionar
            </TypographyValue >) : (
                <TypographyValue
                    color="primary"
                    component="p"
                    variant="caption"
                    align="center"
                >
                    remover
                </TypographyValue>
            )

        const renderedRequestQuantity = this.state.addRequestButton ? (<div></div>) : (
            <RequestQuantityWrapper>
                <TypographyValue 
                    color="primary"
                    component="p"  
                    variant="caption" 
                    align="center"
                >
                    1
                </TypographyValue >
            </RequestQuantityWrapper>
        )

        return (
            <StyledCard>
                <StyledCardMedia
                    image="/Burger.jpg"
                    title="Food"
                />
                <CardContent>
                    <TypographyTitle 
                        component="h3" 
                        variant="subtitle1" 
                        color="primary"
                    >
                        Burger
                    </TypographyTitle >
                    {renderedRequestQuantity}
                    <TypographyDescription
                        component="p"  
                        variant="caption" 
                        color="initial"
                    >
                        {/* 60 caracteres (para validação do imput de criação de comida) */}
                        Descrição do burger Descrição do burger Descrição Descrição Des  
                    </TypographyDescription>
                    <TypographyValue 
                        component="p"  
                        variant="subtitle2" 
                        color="secondary"
                    >
                        R$ 10,00
                    </TypographyValue >
                    <AddRequestButton 
                        onClick={this.onClickAddRequestButton}
                    >
                        {renderedButton}
                    </AddRequestButton>
                </CardContent>
            </StyledCard>
        )
    }
}

export default FoodCard