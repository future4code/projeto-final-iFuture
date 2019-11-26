import React from "react";
import Header from '../../components/Header';
import MainButtonComponent from '../../components/MainButton'
import { ImgLogo, ContainerLoginPage, TextEnter, InputEmail, InputPassword, TextRegisterUser} from './styled';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

const imgIcon = {
    logo: require('../../assets/logo.svg'),
};

class LoginPage extends React.Component {
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

    render() {
        return(
            
            <div>
                <ContainerLoginPage>
                    <ImgLogo src={imgIcon.logo} alt="logo" />

                    <TextEnter>Entrar</TextEnter>

                    <InputEmail
                        required
                        id="outlined-required-name"
                        label="E-mail"
                        placeholder="email@email.com"
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

                    <MainButtonComponent title="Criar" />

                    <TextRegisterUser>Não possui cadastro? Clique aqui.</TextRegisterUser>

                </ContainerLoginPage>
            </div>
        );
    };
};

export default LoginPage;


