import React from 'react';
import FitText from '@kennethormandy/react-fittext'

class OutputDisplay extends React.Component{
    

    render(props){
        return <p className='output'><span id='answer'><FitText compressor={0.1}>{this.props.placeThisOnScreen}</FitText></span></p>
    }
}

export default OutputDisplay;