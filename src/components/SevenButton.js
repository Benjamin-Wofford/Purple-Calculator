import React from 'react';


class SevenButton extends React.Component{

    render(){
        return <button onClick={() => this.props.handleClick(7)}>7</button>
    }
}

export default SevenButton;