import {useRef} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {actionType, PostDataType} from '../../../redux/store';


type MyPostsPropsType = {
    postData: PostDataType[],
    dispatch: (action: actionType) => void
    newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {

    let postElement = props.postData.map(p => <Post message={p.message} date={p.date} likeCount={p.likeCount}/>)

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    let onAddPost = () => {
        props.addPost();
        // if (newPostElement.current !== null) {
        //     props.dispatch(addPostActionCreator())
        // }

    }
    let onPostChange = () => {
        if (newPostElement.current !== null) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
            // let action = updateNewPostTextActionCreator(text);
            // props.dispatch(action)
        }
    }
    return (
        <div className={s.posts}>
            <div className={s.writePost}>
                <h2>My posts</h2>
                <div className={s.postForm}>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.newPostText} rows={3} cols={30}
                              placeholder="your news"></textarea>

                    <button onClick={onAddPost}>Send</button>
                </div>
            </div>
            {postElement}


        </div>

    )
}
export default MyPosts;