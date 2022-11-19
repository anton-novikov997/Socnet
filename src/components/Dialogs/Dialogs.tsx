import React from "react";
import s from "./Dialogs.module.css"



export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Anton
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Anna
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>1</div>
                <div className={s.message}>2</div>
                <div className={s.message}>3</div>
                <div className={s.message}>4</div>
                <div className={s.message}>5</div>
            </div>
        </div>
    )

}