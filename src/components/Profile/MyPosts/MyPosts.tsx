import React from 'react';
import s from './MyPosts.module.css';
import Post from '../Post/Post';


const MyPosts = () => {
    let PostData = [
        {id: 1, message: 'Hi, how are you?', date: '30 sep 2020', likeCount: 5},
        {id: 2, message: 'It\'s my first post', date: '12 jun 2018', likeCount: 20}]

    let postElement = PostData.map(p => <Post message={p.message} date={p.date} likeCount={p.likeCount}/>)
    return (
        <div className={s.posts}>
            <div className={s.writePost}>
                <h2>My posts</h2>
                <form className={s.postForm}>
                    <textarea rows={3} cols={30} placeholder="your news"></textarea>

                    <input type="submit" value="Send"></input>
                </form>
            </div>
            {postElement}


        </div>

    )
}
export default MyPosts;