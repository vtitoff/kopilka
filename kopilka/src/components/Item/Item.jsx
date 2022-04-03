import React from 'react'
import classes from './Item.module.css'
import {CircleProgress} from './progressBarImport'

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
                    <CircleProgress percentage={(props.current_sum / props.full_sum * 100).toFixed(1)} strokeWidth={8}/>
                </div>
            </div>
        </div>
    )
}

export default Item;