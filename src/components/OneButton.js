import React from 'react';


class OneButton extends React.Component{



   


    render(){
        return <button onClick={() => this.props.handleClick(1)}>1</button>
    }
}

export default OneButton;