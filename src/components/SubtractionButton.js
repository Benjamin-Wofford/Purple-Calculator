import React from 'react';


class SubtractionButton extends React.Component{


    render(){
        return <button id='subtract' className='arithmetic' onClick={() => this.props.handleClick('-')}>-</button>
    }
}

export default SubtractionButton;