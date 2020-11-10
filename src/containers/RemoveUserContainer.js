import {deleteUserAction} from "../actions/AccountActions";
import {connect} from "react-redux";
import RemoveUser from "../components/RemoveUser";

function mapDispatchToProps(dispatch) {
    return {
        deleteUser: password => dispatch(deleteUserAction(password))
    }
}

function mapStateToProps(state) {
    return {
        error: state.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveUser);