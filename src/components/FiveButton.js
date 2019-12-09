import React from 'react';


class FiveButton extends React.Component{

    render(){
        return <button onClick={()=> this.props.handleClick(5)}>5</button>
    }
}

export default FiveButton;