import React from "react";
import Header from '../../components/Header';
import MainButtonComponent from '../../components/MainButton'
import { ImgLogo, ContainerSignUpPage, TextRegister, InputName, InputEmail, InputCPF, InputPassword, InputPasswordConfirm } from './styled';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

const imgIcon = {
    logo: require('../../assets/logo.svg'),
};

class SignUpPage extends React.Component {
    constructor() {
        super();
        this.state = {
            showPassword: false,
            showPasswordConfirm: false,
        }
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleClickShowPasswordConfirm = () => {
        this.setState(state => ({ showPasswordConfirm: !state.showPasswordConfirm }));
    };

    render() {
        return(
            
            <div>
                <Header title={''} isArrowBackVisible={true} />

                <ContainerSignUpPage>
                    <ImgLogo src={imgIcon.logo} alt="logo" />

                    <TextRegister>Cadastrar</TextRegister>

                    <InputName
                        required
                        id="outlined-required-name"
                        label="Nome"
                        placeholder="Nome e Sobrenome"
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
                        placeholder="email@email.com"
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
                        placeholder="000.000.000-00"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <InputPassword
                        required
                        id="outlined-required-password"
                        label="Senha"
                        placeholder="Mínimo 6 caracteres"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickShowPassword}
                                    >
                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />


                    <InputPasswordConfirm
                        required
                        id="outlined-required-confirm"
                        label="Confirmar"
                        placeholder="Confirme a senha anterior"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickShowPasswordConfirm}
                                    >
                                        {this.state.showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <MainButtonComponent title="Criar" />

                </ContainerSignUpPage>
            </div>
        );
    };
};
export default SignUpPage


