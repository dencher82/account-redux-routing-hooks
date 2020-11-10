import {connect} from "react-redux";
import EditPassword from "../components/EditPassword";
import {changePasswordAction} from "../actions/AccountActions";

function mapDispatchToProps(dispatch) {
    return {
        changePassword: password => dispatch(changePasswordAction(password))
    }
}

export default connect(null, mapDispatchToProps)(EditPassword);