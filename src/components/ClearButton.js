import React from 'react';


class ClearButton extends React.Component{


    render(){

        return(
            <button className='clear' onClick={this.props.handleClear}>CLEAR</button>
        )
    }
}

export default ClearButton;