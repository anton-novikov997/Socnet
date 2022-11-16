import React from "react";
import styleHeader from "./Header.module.css"

export function Header(){
    return(
        <div className={styleHeader.header}><header>
            <img src="https://miro.medium.com/max/720/1*p8SGPFKYcbRWKfdj50wNxQ.png" alt="logo"/>
        </header></div>
    )
}