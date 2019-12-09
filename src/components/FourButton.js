import React from 'react';


class FourButton extends React.Component{

    render(){
        return <button onClick={() => this.props.handleClick(4)}>4</button>
    }
}

export default FourButton; 