import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {StoreAppType} from "../../../redux/redux-store";
type MyPostsContainer = {
    store: StoreAppType
}

const MyPostsContainer = (props: MyPostsContainer) => {
    let state = props.store.getState();

    let addPost = () => {
            props.store.dispatch(addPostActionCreator())

    }
    let onPostChange = (text:string) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)

    }
    return (
        <MyPosts updateNewPostText={onPostChange}
                 newPostText={state.profilePage.newPostText}
                 addPost={addPost} posts={state.profilePage.posts}/>
    )
}
export default MyPostsContainer;