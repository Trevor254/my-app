import React, {Component} from 'react';
import Ninjas from './Ninjas';


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
  render(){
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    )
  }
}

export default App;
