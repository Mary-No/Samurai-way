import React, {useState} from 'react';
import s from './Post.module.css';
import Avatar from '../../Avatar/Avatar';
import like from '../../../../assets/heart.png'


type PostType = {
    message: string
    date: string
    likeCount: number

}
const Post = (props: PostType) => {
    let [likes, incrementCount] = useState(props.likeCount)

    function clickLike() {
        incrementCount((actual) => actual + 1)
    }

    return (

        <div className={s.post}>
            <Avatar round={true}/>
            <div className={s.post_content}>
                <p className={s.descriptName}>Bars</p>
                <p className={s.post_date}>{props.date}</p>
                <p className={s.post_message}>{props.message}</p>
                <div className={s.like} onClick={
                    clickLike
                }>
                    <div className={s.like_icon}>
                        <img className={s.like_iconImg} src={like} alt="like_icon"/>
                    </div>
                    <div className={s.like_count}>{likes}</div>
                </div>
            </div>

        </div>


    )
}
export default Post;