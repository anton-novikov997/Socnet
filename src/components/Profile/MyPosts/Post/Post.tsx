import React from 'react';
import stylePost from "./Post.module.css"
type PostPropsType={
    message:string
    likeCounts:number
}

export const Post = (props:PostPropsType) => {
    return (
        <div className={stylePost.text}>
            <img src="https://rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg" alt=""/>
            {props.message}
           <div> <span>Like</span> {props.likeCounts}</div>
        </div>

    );
};

