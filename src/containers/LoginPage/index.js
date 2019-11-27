import React, { useEffect } from "react";
import MainButtonComponent from '../../components/MainButton'
import PopUp from "../../components/PopUpAddCart";
import { getProfile} from '../../actions'
import { connect } from "react-redux";

const LoginPage = (props) => {

    useEffect(() => {
        props.getProfile()
    }, [])

    return (
        <div>
        <PopUp/>
        <MainButtonComponent onButtonClick="{sayHello}" title="Registrar"/>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getProfile: () => dispatch(getProfile()),
})

export default connect(null, mapDispatchToProps) (LoginPage)


