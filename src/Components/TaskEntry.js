import React from 'react';

class TaskEntry extends React.Component {
    
    render(){
        return (
            <div style={styles.header} className="row">
                <div className="col">
                    <input type="text" value="" />
                </div>
                <div className="col">
                    <input type="button" value="Save" />
                </div>
            </div>
        );
    }
}

const styles= {
    header : {
        textAlign: "center",
        margin: 'auto',
        maxWidth: '400px',
        paddingTop: "40px",
        paddingBottom: "60px",
    }
    
}


export default TaskEntry; 