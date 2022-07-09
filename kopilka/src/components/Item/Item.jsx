import React, {useState} from 'react'
import classes from './Item.module.css'
import {CircleProgress} from './progressBarImport'
import ModalItemEdit from "../ModalItem/ModalItemEdit";

const Item = (props) => {
    console.log(props)
    const [modalEditActive, setModalEditActive] = useState(false)

    function modalEdit() {
        setModalEditActive(!modalEditActive)
        console.log('modal edit')
        console.log(modalEditActive)
    }

    function getItemId() {
        console.log(props.name)
    }

    return (
        <div className={classes.item}>
            <div className={classes.item__body}>
                <div className={classes.item__bodyName}>
                    {props.name}
                </div>
                <div className={classes.item__bodyPoints}>
                    {props.current_sum}/{props.full_sum}
                </div>
            </div>
            <div className={classes.item__stat}>
                <button href="#" className={classes.item__edit} onClick={modalEdit}>
                    Редактировать
                </button>
                <div className={classes.item__statWheel}>
                    <CircleProgress percentage={Number((props.current_sum / props.full_sum * 100).toFixed(1))}
                                    strokeWidth={8}
                                    primaryColor={['#f093fb', '#f5576c']}/>
                </div>
            </div>
            <ModalItemEdit active={modalEditActive} setActive={modalEdit}/>
        </div>
    )
}

export default Item;