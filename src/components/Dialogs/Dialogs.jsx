import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Elizabeth
                </div>
                <div className={s.dialog}>
                    Tom Riddle
                </div>
                <div className={s.dialog}>
                    Billy
                </div>
                <div className={s.dialog}>
                    Trump
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