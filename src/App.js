import logo from './logo.svg';
import Details from './cmpnts/Details';
import Fee from './cmpnts/Fee';
import './App.css';
import React from 'react';
import bookImg from './cmpnts/bookImg';
import review from './cmpnts/review';

class App extends React.Component{
    constructor(){
      super();
      this.state = { 
        name:"Database programming",
        mentor:"Abdullah",
        duration:"3 hrs",
        price:"$9"
    };
    }
    

  // this.state={
  //   name:"Database programming",
  //   duration:"3 hrs",
  //   price:"$9"
  // };
  render(){
  return (
    <div className="App">
      {/* name=<b>{this.state.name}</b>
      <br></br>
      duration=<b>{this.state.duration}</b> */}
      <bookImg />
      <review />
      <Details name={this.state.name} duration={this.state.duration} mentor={this.state.mentor}/>
      <Fee price={this.state.price}/>
    </div>
  )
    }

    
}


export default App;
