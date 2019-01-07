import React from 'react';

class Task extends React.Component {

    render() {
        return (
            <div className="row" style={styles.taskRow}>
                <div className="col">
                    {this.props.taskDescription}
                </div>
                <div className="col">
                    <input type="button" value="Delete" />
                </div>
                <div className="col">
                    <input type="button" value="Done" />
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
}

export default Task; 