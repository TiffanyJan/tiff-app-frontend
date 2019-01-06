import React from 'react';

class Header extends React.Component {
    
    render(){
        return (<h1 style={styles.header}> Tiff's To Do List</h1>);
    }
}

const styles = {
    header : {
        color: "#F63375",
        textAlign: 'center',
        fontSize: '60px',
        
    }
    
};



export default Header; 