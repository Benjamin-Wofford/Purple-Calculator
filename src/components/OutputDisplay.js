import React from 'react';


class OutputDisplay extends React.Component{
    
// this needs to have state that I can change and then output the state to the span

    render(){
        return <p className='output'><span id='answer'>12</span></p>
    }
}

export default OutputDisplay;