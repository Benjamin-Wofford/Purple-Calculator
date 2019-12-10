import React from 'react';


class EqualsButton extends React.Component{


    render(){

        return <button id="equals" onClick={this.props.handleEquals}>=</button>
        
    }
}

export default EqualsButton;