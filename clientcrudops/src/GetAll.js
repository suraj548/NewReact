import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class  GetAll extends Component {
  constructor(props){
    super(props)
    this.state={people:[]}
  }
  componentDidMount(){
    const axios=require('axios');
    axios.get('http://localhost:8080/new/app')
    .then(res=>{
      console.log(res.data)
      this.setState({people:res.data});
    }).catch(error=>{
      console.error('Error',error);
    })
  }
  render(){

  return (
    <div className="App">
     <h1>People</h1>
    </div>
  );
  }
}

export default GetAll;
