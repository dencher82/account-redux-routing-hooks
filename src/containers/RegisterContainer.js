import {registerAction} from "../actions/AccountActions";
import Register from "../components/Register";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch) {
    return {
        register: user => dispatch(registerAction(user))
    }
}

export default connect(null, mapDispatchToProps)(Register);