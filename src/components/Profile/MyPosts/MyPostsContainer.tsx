import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {stateDataType} from "../../../redux/store";
import {connect} from "react-redux";


let mapStateToProps = (state: stateDataType) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts

    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        },
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
