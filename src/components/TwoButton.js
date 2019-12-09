import React from 'react';


class TwoButton extends React.Component{

    render(){
        return <button onClick={()=>this.props.handleClick(2)}>2</button>
    }
}

export default TwoButton;