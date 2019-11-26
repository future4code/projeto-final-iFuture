import styled from "styled-components"
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {Typography} from "@material-ui/core";


export const StyledCard = styled(Card) `
    width: 87.5%;
    height: 112px;
    display: flex;
    padding-bottom: 0;
    margin: 0;
`

export const StyledCardMedia = styled(CardMedia)`
    background-color: green;
    flex-basis: 30%;
    height: 100%;
`

export const StyledCardContent = styled(CardContent)`
    flex-basis: 70%;
    height: 100%;
    padding: 0;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(7, 1fr);
    padding-left: 16px;
`

export const TypographyTitle = styled(Typography)`
    padding-top: 15px;
    grid-row-start: 1;
    grid-column-start: 1;
    grid-column-end: 6;
`

export const RequestQuantityWrapper = styled.div`
    grid-row-start: 1;
    grid-column-start: -2;
    border-style:solid;
    border-width:thin;
    border-color: #e8222e;
    border-radius: 0px 5px 0px 5px ;
    padding-top: 3px;
    margin-bottom: 10px;
`

export const TypographyDescription = styled(Typography)`
    grid-row-start: 2;  
    grid-column-start: 1;
    grid-column-end: 7;
`

export const TypographyValue = styled(Typography)`
    grid-row-start: 3;
    grid-column-start: 1;
    grid-column-end: 4;
`

export const AddRequestButton = styled.div`
    grid-row-start: 3;
    grid-column-start: 5;
    grid-column-end: -1;
    border-style:solid;
    border-width:thin;
    border-color: #e8222e;
    border-radius: 5px 0px 5px 0px ;
    padding-top: 3px;
    /* perguntar soter se eu posso alinhar isso com padding/margin, ou se tem alguma solução no grid */
    /* margin-top: 10px; */
`


