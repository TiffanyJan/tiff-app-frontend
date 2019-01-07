import React, { Component } from 'react';
import Header from './Components/Header'; 
import TaskList from './Components/TaskList';

class App extends Component {
  render() {
    return (
      <div style={ sectionStyle }>
        <Header />
        <TaskList />
      </div>
  
    ); 
  }
}

var sectionStyle = {
  width: "100%",
  height: "800px",
  backgroundImage: 'url("https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")'
};


export default App;

 