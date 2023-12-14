import {useRef} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostDataType, UserProfileType} from '../../../redux/store';


type MyPostsPropsType = {
    updateNewPostText: (text: string) => void
    newPostText: string
    addPost: () => void
    posts: PostDataType[]
    profile: UserProfileType
}

const MyPosts = (props: MyPostsPropsType) => {

    let postElement = props.posts.map(p =>
        <Post fullname={props.profile.fullName} key={p.id} message={p.message} date={p.date} likeCount={p.likeCount} img={props.profile.photos.small}/>
    )

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    let onAddPost = () => props.addPost();

    let onPostChange = () => {
        if (newPostElement.current !== null) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
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