import React from 'react';


class DivisionButton extends React.Component{


    render(){

        return(
            <button className='arithmetic' onClick={() => this.props.handleClick("/")}>&#247;</button>
        )
    }
}

export default DivisionButton;