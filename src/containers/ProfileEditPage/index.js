import React from "react";
import Header from '../../components/Header';
import MainButtonComponent from '../../components/MainButton'
import { ContainerProfilePage, InputName, InputEmail, InputCPF } from './styled';

class ProfileEditPage extends React.Component {
    constructor() {
        super();
        this.state = {
        
        }
    }

    render() {
        return (

            <div>
                <Header title={'Editar'} isArrowBackVisible={true} />

                <ContainerProfilePage>
                    <InputName
                        required
                        id="outlined-required-name"
                        label="Nome"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <InputEmail
                        required
                        id="outlined-required-email"
                        label="E-mail"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <InputCPF
                        required
                        id="outlined-required-cpf"
                        label="CPF"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <MainButtonComponent title="Salvar" />

                </ContainerProfilePage>
            </div>
        );
    };
};
export default ProfileEditPage;