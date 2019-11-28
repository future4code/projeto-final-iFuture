import React from "react";
import Header from '../../components/Header';
import MainButtonComponent from '../../components/MainButton'
import { ContainerEditAddressPage, InputAddress, InputNumber, InputHouse, InputNeighborhood, InputCity, InputState } from './styled';
import { connect } from 'react-redux';

class EditAddressPage extends React.Component {
    constructor() {
        super();
        this.state = {
            street: "",
            number: "",
            neighbourhood: "",
            city: "",
            state: "",
            complement: ""
        }
    }

    componentDidMount() {

        const myAddress = this.props.actualAddress
        if(this.props.actualAddress){
        const formatAddress = myAddress.split(",")
        
        console.log(formatAddress)
    
        this.setState({
            street: formatAddress[0],
            number: formatAddress[1],
            neighbourhood: "",
            city: "",
            state: "",
            complement: ""
        })
    }
    }

    hendleInput = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {

        const {street,
            number,
            neighbourhood,
            city,
            state,
            complement,} = this.state

        return (

            <div>
                <Header title={'Endereço'} isArrowBackVisible={true} />

                <ContainerEditAddressPage>

                    <InputAddress
                        required
                        id="outlined-required-name"
                        label="Logradouro"
                        margin="normal"
                        variant="outlined"
                        value={street}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <InputNumber
                        required
                        id="outlined-required-email"
                        label="Número"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <InputHouse
                        id="outlined-required-cpf"
                        label="Complemento"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <InputNeighborhood
                        required
                        id="outlined-required-password"
                        label="Bairro"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />


                    <InputCity
                        required
                        id="outlined-required-confirm"
                        label="Cidade"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />


                    <InputState
                        required
                        id="outlined-required-confirm"
                        label="Estado"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <MainButtonComponent title="Salvar" />

                </ContainerEditAddressPage>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    actualAddress: state.requests.actualProfile.address
})

export default connect(mapStateToProps, null)(EditAddressPage);