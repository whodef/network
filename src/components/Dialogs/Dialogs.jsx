import React from 'react';
import s from './Dialogs.module.css';
import NavLink from "react-router-dom/modules/NavLink";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Elizabeth</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Tom Riddle</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Billy</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Trump</NavLink>
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo!</div>
            </div>
        </div>
    );
}

export default Dialogs;