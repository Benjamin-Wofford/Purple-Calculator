import React from 'react';


class SixButton extends React.Component{

    render(){
        return <button onClick={() => this.props.handleClick(6)}>6</button>
    }
}

export default SixButton;