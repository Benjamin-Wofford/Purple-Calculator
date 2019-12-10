import React from 'react';


class DecimalButton extends React.Component{

    render(){
        return(
            <button id="decimal" onClick={() => this.props.handleClick(".")}>.</button>
        )
    }
}

export default DecimalButton;