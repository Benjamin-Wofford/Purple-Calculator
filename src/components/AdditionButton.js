import React from 'react';


class AdditionButton extends React.Component{


    render(){

        return(
            
                <button className='arithmetic' onClick={() => this.props.handleClick("+")}>+</button>
            
        )
    }
}

export default AdditionButton;