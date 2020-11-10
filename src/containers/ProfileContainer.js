import Profile from "../components/Profile";
import {connect} from "react-redux";
import {logoutAction} from "../actions/AccountActions";

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logoutAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);