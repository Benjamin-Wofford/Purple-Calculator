import React from 'react';


class OutputDisplay extends React.Component{
    

    render(props){
        return <p className='output'><span id='answer'>{this.props.placeThisOnScreen}</span></p>
    }
}

export default OutputDisplay;