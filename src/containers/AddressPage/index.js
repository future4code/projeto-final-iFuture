import React from "react";
import Header from '../../components/Header';
import MainButtonComponent from '../../components/MainButton'
import { ContainerAddressPage, TextRegister, InputAddress, InputNumber, InputHouse, InputNeighborhood, InputCity, InputState} from './styled';


class AddressPage extends React.Component {
    constructor() {
        super();
        this.state = {
        
        }
    }

    render() {
        return(
            
            <div>
                <Header title={''} isArrowBackVisible={true} />

                <ContainerAddressPage>
            

                    <TextRegister>Meu endereço</TextRegister>

                    <InputAddress
                        required
                        id="outlined-required-name"
                        label="Logradouro"
                        placeholder="Rua / Av."
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <InputNumber
                        required
                        id="outlined-required-email"
                        label="Número"
                        placeholder="Número"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <InputHouse
                        required
                        id="outlined-required-cpf"
                        label="Complemento"
                        placeholder="Apto. / Bloco"
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
                        placeholder="Bairro"
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
                        placeholder="Cidade"
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
                        placeholder="Estado"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <MainButtonComponent title="Criar" />

                </ContainerAddressPage>
            </div>
        );
    };
};
export default AddressPage;