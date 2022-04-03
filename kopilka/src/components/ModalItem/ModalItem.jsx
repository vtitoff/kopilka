import React from 'react'
import classes from './ModalItem.module.css'


const ModalItem = (props) => {
    return (
        <div className={classes.modal} onClick={props.setActive}>
            <div className={classes.modalContent} onClick={e=>e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
}

export default ModalItem;