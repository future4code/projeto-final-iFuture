import React from "react";
import Header from '../../components/Header';
import MainButtonComponent from '../../components/MainButton'
import { ContainerEditAddressPage, InputAddress, InputNumber, InputHouse, InputNeighborhood, InputCity, InputState} from './styled';


class EditAddressPage extends React.Component {
    constructor() {
        super();
        this.state = {
        
        }
    }

    render() {
        return(
            
            <div>
                <Header title={'Endereço'} isArrowBackVisible={true} />

                <ContainerEditAddressPage>

                    <InputAddress
                        required
                        id="outlined-required-name"
                        label="Logradouro"
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
export default EditAddressPage;