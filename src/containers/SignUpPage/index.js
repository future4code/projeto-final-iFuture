import React from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push } from "connected-react-router";
import { signUp } from "../../actions";
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
            name: "",
            email: "",
            cpf: "",
            password: "",
            passwordConfirm: "",
            showPassword: false,
            showPasswordConfirm: false,
        }
    }

    onClickRegister = () => {
        const { name, email, cpf, password } = this.state;

        this.props.doSignUp(name, email, cpf, password);
    }

    handleFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };



    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleClickShowPasswordConfirm = () => {
        this.setState(state => ({ showPasswordConfirm: !state.showPasswordConfirm }));
    };

    render() {
        
        const { name, email,cpf, password, passwordConfirm } = this.setState;

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
                        onChange={this.handleFieldChange}
                        name="name"
                        type="name"
                        value={name}

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
                        onChange={this.handleFieldChange}
                        name="email"
                        type="email"
                        value={email}
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
                        onChange={this.handleFieldChange}
                        name="cpf"
                        type="cpf"
                        value={cpf}
                    />

                    <InputPassword
                        required
                        id="outlined-required-password-signUp"
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
                        onChange={this.handleFieldChange}
                        name="passwordSignUp"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={password}
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
                        onChange={this.handleFieldChange}
                        name="passwordConfirm"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={passwordConfirm}
                    />

                    <MainButtonComponent title="Criar" />

                </ContainerSignUpPage>
            </div>
        );
    };
};

function mapDispatchToProps (dispatch) {
    return {
        doSignUp: (name, email, cpf, password) => dispatch(signUp(name, email, cpf, password)),
        goToAddress: () => dispatch(push(routes.adress))
    }
}
export default connect(
    null,
    mapDispatchToProps)
    (SignUpPage);


