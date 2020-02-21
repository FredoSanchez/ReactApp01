import React, {Component} from 'react';
import {Form} from './components/Form/Form'
import {List} from './components/List/List'

import './App.css';

const initState = {
  name: "",
  carnet: "",
  late: false
}

class App extends Component{
  constructor(props){
    super(props)
    this.state={...initState, students:[]}
    this.changeHandler=this.changeHandler.bind(this)
    this.submitHandler=this.submitHandler.bind(this)
    this.deleteHandler=this.deleteHandler.bind(this)
  }
  changeHandler(event){
    const tipo = event.target.type
    let value
    const key = event.target.id
    if(tipo==="checkbox"){
      value = event.target.checked
    }else{
      value = event.target.value
    }

    this.setState({
      [key]: value
    }) 

  }

  submitHandler(event){
    event.preventDefault()
    const {name, carnet, late} = this.state
    const students = [...this.state.students]
    students.push({name, carnet, late})
    this.setState({
      ...initState,
      students
    })
  }
  
  deleteHandler(index){
    const newStudents = this.state.students.filter((student, indice)=>{
      return indice !== index
    })

    this.setState({
      students: newStudents
    })

  }

  render(){
    const {name, carnet, late, students} = this.state
    return (
      <div className="App">
        <h1>Asistencia</h1>
        <Form name={name} carnet={carnet} late={late} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
        <List students={students} deleteHandler={this.deleteHandler}/>
      </div>
    );
  }
}

export default App;