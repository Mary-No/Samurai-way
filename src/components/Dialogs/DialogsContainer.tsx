import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {stateDataType} from "../../redux/store";
import {FC, ReactComponentElement} from "react";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";



let mapStateToProps = (state: stateDataType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
//:(action?: actionType) => void
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
export default compose<FC>(connect(mapStateToProps, mapDispatchToProps))(Dialogs);

