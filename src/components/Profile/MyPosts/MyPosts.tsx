import React from 'react';
import {Post} from "./Post/Post";
import s from "MyPosts.module.css"

export const MyPosts = () => {
    return (
        <div>
            <div><textarea></textarea>
                <button>Add button</button>
                <button>Remove</button>
                <div>New post</div>
                <div>
                    <Post message={"Hi,how are you?"} likeCounts={10}/>
                    <Post message={"Hi,i'm fine"} likeCounts={20}/>
                </div>

            </div>
        </div>
    );
};

