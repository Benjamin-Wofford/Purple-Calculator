import React from 'react';


class NineButton extends React.Component{

    render(){
        return <button onClick={() => this.props.handleClick(9)}>9</button>
    }
}

export default NineButton;