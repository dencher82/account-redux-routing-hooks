import {connect} from "react-redux";
import {editNameAction} from "../actions/AccountActions";
import EditName from "../components/EditName";

function mapDispatchToProps(dispatch) {
    return {
        editName: user => dispatch(editNameAction(user))
    }
}

export default connect(null, mapDispatchToProps)(EditName);