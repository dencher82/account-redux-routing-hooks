import {loginAction} from "../actions/AccountActions";
import {connect} from "react-redux";
import Login from "../components/Login";

function mapDispatchToProps(dispatch) {
    return {
        login: user => dispatch(loginAction(user))
    }
}

function mapStateToProps(state) {
    return {
        error: state.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);