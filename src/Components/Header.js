import React from 'react';

class Header extends React.Component {

    render() {
        return (<div>
            <h1 style={styles.header}> Tiff's To Do List</h1>
           <h1 style={styles.subHeader}>You have {this.props.taskLength} tasks left to complete</h1>
        </div>);
    }
}
const styles = {
    header: {
        color: "#F63375",
        textAlign: 'center',
        fontSize: '60px',
    },
    subHeader:{
        color: "#2200FA",
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: "20px"
    }
};

export default Header; 