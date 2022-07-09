import React from 'react'
import classes from './ModalItem.module.css'
import ModalItem from "./ModalItem";


const ModalItemEdit = (props) => {
    if (props.active) {
        return (

            <ModalItem setActive={props.setActive}>
                <div className={classes.modalContainer}>
                    <div className={classes.modalRaw}>
                        <label htmlFor="">Название</label>
                        <textarea className={classes.modalRawTextArea}/>
                    </div>
                    <div className={classes.modalRaw}>
                        <label htmlFor="">Текущая сумма</label>
                        <input/>
                    </div>
                    <div className={classes.modalRaw}>
                        <label htmlFor="">Требуемая сумма</label>
                        <input/>
                    </div>
                     <div className={classes.modalRaw}>
                        <label htmlFor="">Валюта</label>
                        <input/>
                    </div>
                    <button>Сохранить</button>
                </div>
            </ModalItem>
        )
    }
}

export default ModalItemEdit;