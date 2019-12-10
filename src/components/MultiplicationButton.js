import React from 'react';

class MultiplicationButton extends React.Component{

    render(){
        return <button className='arithmetic' onClick={() => this.props.handleClick("*")}>&#215;</button>
    }
}

export default MultiplicationButton;