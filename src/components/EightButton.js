import React from 'react';


class EightButton extends React.Component{

    render(){
        return  <button onClick={() => this.props.handleClick(8)}>8</button>
    }
}

export default EightButton;