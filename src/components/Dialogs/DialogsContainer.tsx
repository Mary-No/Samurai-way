import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {FC} from "react";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";



let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (newText: string) => {
            dispatch(updateNewMessageTextCreator(newText))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
    }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs)

export default compose<FC>(connect(mapStateToProps, mapDispatchToProps))(AuthRedirectComponent);

