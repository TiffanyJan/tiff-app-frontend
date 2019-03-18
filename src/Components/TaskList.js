import React from 'react';

import Task from './Task';

class TaskList extends React.Component {

    render() {
        return (
            <div >
                {this.props.tasks.map((task, i) => 
                <Task removeTask={this.props.removeTask} taskId ={task.taskId} taskDescription={task.taskDescription} key={i} id={i} />)}
            </div>
        );  
    }
}


export default TaskList;