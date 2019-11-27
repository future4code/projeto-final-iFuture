import React, {useState} from "react";
import { StyledCard, CardContent, StyledCardMedia, 
    TypographyTitle, TypographyDescription, TypographyValue,
    RequestQuantityWrapper, AddRequestButton} from "./styled";

export const FoodCard = (props) => {

    const [nameRequestButton, setNameRequestButton] = useState("adicionar")
    const [borderColor, setBorderColor] = useState("black")
    const [color, setColor] = useState("secondary")
    const [requestQuantity, setRequestQuantity] = useState(false)

    const onClickAddRequestButton = () => {
        if (nameRequestButton === "adicionar") {
            setNameRequestButton("remover")
            setBorderColor("#e8222e")
            setColor("primary")
            setRequestQuantity(true)
            props.showPopUpAddCart(props.foodInfo.id)
        } else {
            setNameRequestButton("adicionar")
            setBorderColor("black")
            setColor("secondary")
            setRequestQuantity(false)
        }
    }

    const showRequestQuantity = requestQuantity ? (
        <RequestQuantityWrapper>
            <TypographyValue 
                color="primary"
                component="p"  
                variant="caption" 
                align="center"
            >
                {props.amount}
            </TypographyValue >
        </RequestQuantityWrapper>
    ) : (<div></div>)
    
    return (
        <StyledCard>
            <StyledCardMedia
                image="https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4.jpg"
                title="Food"
            />
            <CardContent>
                <TypographyTitle 
                    component="h3" 
                    variant="subtitle1" 
                    color="primary"
                >
                    {props.foodInfo.name}
                </TypographyTitle >
                {showRequestQuantity}
                <TypographyDescription
                    component="p"  
                    variant="caption" 
                    color="initial"
                >
                    {/* 60 caracteres (para validação do imput de criação de comida) */}
                    {props.foodInfo.description}
                </TypographyDescription>
                <TypographyValue 
                    component="p"  
                    variant="subtitle2" 
                    color="secondary"
                >
                    R$ {props.foodInfo.price}
                </TypographyValue >
                <AddRequestButton 
                    onClick={onClickAddRequestButton}
                    borderColor={borderColor}
                >
                    <TypographyValue 
                        color={color}
                        component="p"  
                        variant="caption" 
                        align="center" 
                    >
                        {nameRequestButton}
                    </TypographyValue >
                </AddRequestButton>
            </CardContent>
        </StyledCard>
    )
}

export default FoodCard