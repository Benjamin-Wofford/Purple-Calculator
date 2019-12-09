import React from 'react';


class ZeroButton extends React.Component{

    render(){
        return <button className='zero' onClick={() => this.props.handleClick(0)}>0</button>
    }
}

export default ZeroButton;