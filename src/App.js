 import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';


class App extends Component{
  state = {
    ninjas: [
        {name:'Oscar',age:30,belt:'black',id:2},
        {name:'Selena',age:23,belt:'brown',id:4},
        {name:'Trevor',age:20,belt:'Red',id:3},
        {name:'James',age:25,belt:'yellow',id:1},
        {name:'Jack',age:15,belt:'blue',id:7}
    ]
}

addNinja = (ninja1) => {
  ninja1.id = Math.random(); // the math.random function will produce different numbers that will serve as unique ids
  var ninjas = [...this.state.ninjas, ninja1];
  this.setState ({
    ninjas:ninjas
  })
}

deleteNinja = (id) => {
  console.log(id)  
}
  render(){
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <p>Welcome :)</p>
        <Ninjas deleteNinja = {this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
        
      </div>
    )
  }
}

export default App;
