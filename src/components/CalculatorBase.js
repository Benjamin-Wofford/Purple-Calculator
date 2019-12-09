import React from 'react';
import AdditionButton from './AdditionButton';
import ClearButton from './ClearButton';
import DecimalButton from './DecimalButton';
import DivisionButton from './DivisionButton';
import EightButton from './EightButton';
import EqualsButton from './EqualsButton';
import FiveButton from './FiveButton';
import FourButton from './FourButton';
import NineButton from './NineButton';
import OneButton from './OneButton';
import OutputDisplay from './OutputDisplay';
import SevenButton from './SevenButton';
import SixButton from './SixButton';
import SubtractionButton from './SubtractionButton';
import ThreeButton from './ThreeButton';
import TwoButton from './TwoButton';
import ZeroButton from './ZeroButton';
import './CalculatorBase.scss';
import MultiplicationButton from './MultiplicationButton';


class CalculatorBase extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            output: 0
        }
    }
 // this needs to have state that I can change and then output the state to the span
// this is the only one that needs state. I will also need a set state method and then I will pass that method down to 
//stateless children... but the thing is.. this doesn't have any children

    render(){
        return (
            <main className="baseboard">
                <OutputDisplay placeThisOnScreen={this.state.output}/>
                <ClearButton/>
                <DivisionButton/>
                <SevenButton/>
                <EightButton/>
                <NineButton/>
                <MultiplicationButton/>
                <FourButton/>
                <FiveButton/>
                <SixButton/>
                <AdditionButton/>
                <OneButton/>
                <TwoButton/>
                <ThreeButton/>
                <SubtractionButton/>
                <DecimalButton/>
                <ZeroButton/>
                <EqualsButton/>
            </main>
        )
            
    }
}

export default CalculatorBase;