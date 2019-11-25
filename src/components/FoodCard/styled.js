import styled from "styled-components"
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


export const StyledCard = styled(Card) `
    width: 87.5%;
    height: 112px;
    display: flex;
`

export const StyledCardMedia = styled(CardMedia)`
    background-color: green;
    flex-basis: 30%;
`

export const StyledCardContent = styled(CardContent)`
    display: grid;
    grid-template-rows: (1fr * 3);
    grid-template-columns: (1fr * 7);
`


