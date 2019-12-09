import React from 'react';


class ThreeButton extends React.Component{

    render(){
        return <button onClick={() => this.props.handleClick(3)}>3</button>
    }
}

export default ThreeButton;