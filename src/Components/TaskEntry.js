import React from 'react';

class TaskEntry extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            taskDescription: ""
        };

        //event binding function
        this.onSaveClicked = this.onSaveClicked.bind(this);
        this.onTaskTestFieldUpdated = this.onTaskTestFieldUpdated.bind(this);
    }

    onSaveClicked() {

        const taskToBeAdded = {
            id: (Math.random() * 100),
            description: this.state.taskDescription,
        };

        this.props.onSaveTaskHandler(taskToBeAdded);

        this.setState({
            taskDescription: ""
        }); //this bit clears the text field + updates what's typed
    }

    onTaskTestFieldUpdated(event) {
        const description = event.target.value;

        this.setState({
            taskDescription: description
        });
    }

    render() {
        return (
            <div style={styles.header} className="row">
                <div className="col">
                    <input type="text" value={this.state.taskDescription} onChange={this.onTaskTestFieldUpdated} />
                </div>
                <div className="col">
                    <input type="button" value="Save" onClick={this.onSaveClicked} />
                </div>
            </div>
        );
    }
}

const styles = {
    header: {
        textAlign: "center",
        margin: 'auto',
        maxWidth: '400px',
        paddingTop: "40px",
        paddingBottom: "60px",
    }

}

export default TaskEntry; 