import React from 'react'

export const Item = props => {
    const {name, carnet, late, deleteHandler} = props
    return(
        <div>
            <div>
                <h4>Nombre: {name}</h4>
                <span onClick={deleteHandler}>x</span>
            </div>
            <div>
                <span>Carnet: {carnet}</span>
                <span>Llegó tarde: {late?'Sí':'No'}</span>
            </div>
        </div>
    )
}