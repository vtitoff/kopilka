import React from 'react'
import classes from './Item.module.css'

const Item = (props) => {
    console.log(props)
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
                <a href="#" className={classes.item__edit}>
                    Редактировать
                </a>
                <div className={classes.item__statWheel}>
                    0%
                </div>
            </div>
        </div>
    )
}

export default Item;