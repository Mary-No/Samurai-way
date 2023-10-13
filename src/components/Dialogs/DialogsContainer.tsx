import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {stateDataType} from "../../redux/store";



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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;
