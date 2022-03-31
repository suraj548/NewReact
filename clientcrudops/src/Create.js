import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class  Create extends Component {
  constructor(props){
    super(props)
    this.state={people:{}}
  }
  newN=(e)=>{
    this.setState({name:e.target.value})
  }
  newA=(e)=>{
    this.setState({age:e.target.value})
  }
  updateTable(event){
    const axios=require('axios');
    axios.post('http://localhost:8080/new/app/',{age:this.state.age,name:
  this.state.name})
  .then(res=>{
    console.log(res.data);
  }).catch(err=>{
    console.error('Error',err)
  })
  }
  render(){

  return (
    <div>
     <h1>People</h1>
      Enter Person name:<input onChange={this.newN}/>
      Enter Person age:<input onChange={this.newA}/>
      <button onClick={this.updateTable.bind(this)}>Insert Person</button>
    </div>
  );
  }
}

export default Create;
