import React from 'react';

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.removeTask = this.removeTask.bind(this);
    }

    removeTask(id) {
        this.props.removeTask(this.props.id)
    }

    render() {
        return (
            <div className="row" style={styles.taskRow}>
                <div className="col" style={styles.taskDescription}>
                    {this.props.taskDescription}
                </div>
                <div className="col">
                    <input type="button" value="Done" onClick={this.removeTask} />
                </div>
            </div>
        );
    }
}

const styles = {
    taskRow: {
        paddingTop: "10px",
        paddingBottom: "10px",
        textAlign: "center",
        width: '530px',
        margin: 'auto',
        maxWidth: '530px',
        fontWeight: 200,
        fontSize: '20px'
    },
    taskDescription: {
        color: "Blue"
    },
};

export default Task; 