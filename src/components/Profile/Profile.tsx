import React from 'react';
import styleProfile from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {

    return (<div className={styleProfile.content}>
            <div><img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pokai_Bucht_auf_Oahu.jpg/1200px-Pokai_Bucht_auf_Oahu.jpg"
                alt=""/></div>
            <div>ava + descr</div>
            <MyPosts/>
        </div>
    );
};

