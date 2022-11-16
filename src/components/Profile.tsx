import React from 'react';
import styleProfile from "./Profile.module.css"

export const Profile = () => {
    console.log(styleProfile)
    return (
        <div className={styleProfile.content}>

            <div><img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pokai_Bucht_auf_Oahu.jpg/1200px-Pokai_Bucht_auf_Oahu.jpg"
                alt=""/></div>
            <div>ava + descr</div>
            <div>My post
                <div>New post</div>
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    );
};

