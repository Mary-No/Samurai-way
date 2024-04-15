import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";



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


export default compose<any>(connect(mapStateToProps, mapDispatchToProps))(Dialogs);

