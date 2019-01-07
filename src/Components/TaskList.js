import React from 'react';

import Task from './Task';

class TaskList extends React.Component {

    render() {

        return (
            <div >
                {this.props.tasks.map((task, i) => 
                <Task  taskDescription={task.description} key={i} />)}
            </div>
        );
    }
}
//do the styling on task.js file

export default TaskList;