import React from 'react'

export const Form = props =>{
    const {name, carnet, late, changeHandler, submitHandler} = props    
    return(
        <form onSubmit = {submitHandler}>
            <input onChange={changeHandler} id="name" placeholder="Nombre" value={name}/>
            <input onChange={changeHandler} id="carnet" placeholder="Carnet" value={carnet}/>
            <label for="late">Tarde</label>
            <input onChange={changeHandler} type="checkbox" id="late" checked={late}/>
            <button>Guardar</button>
        </form>
    )
}