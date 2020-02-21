import React from 'react'
import {Item} from './Item/Item'

export const List = props =>{
    return(
        <div>
            {props.students.map((student, index)=>{ return <Item {...student} deleteHandler={()=> props.deleteHandler(index)}/>})}
        </div>
    )
}