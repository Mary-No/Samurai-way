import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {actionType, stateDataType} from "../../../redux/store";
import {connect} from "react-redux";
import {StoreAppType} from "../../../redux/redux-store";


// let mapStateToProps = (state: stateDataType) => {
//     return {
//         newPostText: state.profilePage.newPostText,
//         posts: state.profilePage.posts
//
//     }
// }
// let mapDispatchToProps = (dispatch:(action?: actionType) => void) => {
//     return {
//         addPost: () => {
//             dispatch(addPostActionCreator())
//         },
//         updateNewPostText: (text: string) => {
//             let action = updateNewPostTextActionCreator(text);
//             dispatch(action)
//         },
//     }
// }
// const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
// export default MyPostsContainer;

type MyPostsContainerType = {
    store: StoreAppType
}
const MyPostsContainer = (props: MyPostsContainerType) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text:string) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)
    }
    return(
        <MyPosts updateNewPostText={onPostChange} newPostText={state.profilePage.newPostText} addPost={addPost} posts={state.profilePage.posts}/>
    )
}
export default MyPostsContainer;