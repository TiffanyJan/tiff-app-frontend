import React, { Component } from 'react';
import Header from './Components/Header';
import TaskList from './Components/TaskList';
import TaskEntry from './Components/TaskEntry';
import { accessSync } from 'fs';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(task) {
    let currentListOfTasks = this.state.tasks;
    currentListOfTasks.push(task);
    this.setState({
      tasks: currentListOfTasks
    });
  }

  removeTask(id){
    console.log(id);
    let currentListOfTasks = this.state.tasks;
    currentListOfTasks.splice(id,1);
    this.setState({
      tasks: currentListOfTasks
    });
  }

  render() {
    return (
      <div style={sectionStyle}>
        <Header />
        <TaskEntry onSaveTaskHandler={this.addTask} />
        <TaskList tasks={this.state.tasks} removeTask={this.removeTask} />
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