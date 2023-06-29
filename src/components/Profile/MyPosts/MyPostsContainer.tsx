import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                if (!store) return

                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator())

                }
                let onPostChange = (text: string) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action)

                }
                return <MyPosts updateNewPostText={onPostChange}
                         newPostText={state.profilePage.newPostText}
                         addPost={addPost} posts={state.profilePage.posts}/>
            }
        }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;