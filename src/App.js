import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Component Life Cycle</h1>
        </header>
        <Body/>
      </div>
    );
  }
}

class Body extends Component {

  constructor(props){
    super(props);

    this.state = {
      r:"0"
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }
  getRandomNumber(){
    //console.log("random number called")
    this.setState({r:Math.floor(Math.random()*10)})
  }
  render(){
    return(
      <div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
        <button onClick={this.getRandomNumber}>Random Number</button>
        <Numbers myNumbers = {this.state.r}/>
    </div>
    );
  }
}

class Numbers extends Component {

  componentWillMount(){
    console.log("Component Will mount!");
  }
  componentDidMount(){
    console.log("Component Did mount!");
  }
  componentWillReceieveProp(newProps){
    console.log("componentWillReceieveProp called!");
  }

  shouldComponentUpdate(newProps,newState){
    console.log("shouldComponentUpdate called!");
    return true;
  }
  componentWillUpdate(newProps,newState){
    console.log("componentWillUpdate called!");
  }
  componentWillUnmount(newProps){
    console.log("componentWillUnmount called!");
  }
  render(){
    return(
      <div>
        <br/>
        <p>{this.props.myNumbers}</p>
      </div>
    );
  }
}
// App.propType ={
//   propObject: React.PropTypes.object,
//   propString:React.PropTypes.string.isRequired,
//   propNumber:React.PropTypes.number
// }
//
// App.defaultProps ={
//   propObject: {obj1:"I am object 1",
//     obj2:"I am object 2",
//     obj3:"I am object 3"
//   },
//   propString:"This is prop String",
//   propNumber:2
// }
//We have function bool and array as well in props
class Parent extends Component {

// define constructor for initialization
// function for onClick
// bind function before using function
  constructor(props){
    super(props);

    this.state = {
      cars:['BMW','Audi','Nano']
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({cars : this.state.cars.reverse()})
  }
  render(){
    return(
      <div>
        <h2 onClick={this.handleClick}>I am Parent</h2>
        <Cars msg ="Cars are cool" model = "121361" coolCars = {this.state.cars}/>
      </div>
    );
  }
}
///band method
Parent.defaultProps ={
  cars:['BMW','Audi']
}
class Cars extends Component {
  render(){
    return(
      <div>
        <h2>I am from Car</h2>
        <h3>{this.props.msg}</h3>
        <h3>{this.props.model}</h3>
        <div>{this.props.coolCars.map((item,i)=>{
            return <p key={i}>{item}</p>;
          })}</div>
      </div>
    );
  }
}
export default App;
