import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type MyPostsPropsType = {
    info: string
}

const MyPosts = (props: MyPostsPropsType) => {
    return (
        <div className={s.my_Posts}>
            <div className={s.myPosts}> {props.info} </div>
            <div>
                <textarea> </textarea>
            </div>
            <button>Add post</button>

            <div className={s.posts}>
                <Post message="Hi, why nobody love me" likesCount={15}/>
                <Post message="It's our new program! Hey!" likesCount={2}/>
            </div>
        </div>
    );
};

export default MyPosts;