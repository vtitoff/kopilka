import React from 'react'
import classes from './ModalItem.module.css'
import ModalItem from "./ModalItem";


const ModalItemCreateItem = (props) => {
    if (props.active) {
        return (

            <ModalItem setActive={props.setActive}>
                <div className={classes.modalContainer}>
                    <div className={classes.modalRaw}>
                        <label htmlFor="">Название</label>
                        <textarea className={classes.modalRawTextArea}/>
                    </div>
                    <div className={classes.modalRaw}>
                        <label htmlFor="">Сумма</label>
                        <input/>
                    </div>
                    <div className={classes.modalRaw}>
                        <label htmlFor="">Валюта</label>
                        <input/>
                    </div>
                    <button>Добавить цель</button>
                </div>
            </ModalItem>
        )
    }
}

export default ModalItemCreateItem;