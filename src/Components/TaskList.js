import React from 'react';

import Task from './Task';

class TaskList extends React.Component {

    render() {

        let listOfTasks = [ 
            {
                id: 1,
                description: "Buy oranges",
                completed: false
            },
            {
                id: 2,
                description: "Buy Milk",
                completed: false
            },
            {
                id: 3,
                description: "Take Medicine",
                completed: false
            },
        ];

        return (
            <div >
                {listOfTasks.map((task, i) => <Task  taskDescription={task.description} key={i} />)}
            </div>

        );
    }

}


export default TaskList;