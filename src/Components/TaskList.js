import React from 'react';

import Task from './Task';

class TaskList extends React.Component {
    
    render(){

        let listOfTasks = [
            "Buy Milk",
            "Buy Oranges",
            "Walk the Dog"
        ];

        return (
            <div>
                {listOfTasks.map((task, i)=> 
                <Task taskDescription={task} key={i} />)}
            </div>
            );
    }
}


export default TaskList; 