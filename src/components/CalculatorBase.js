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
        this.handleClick = this.handleClick.bind(this)
    }

        handleClick(currentButtonClicked){
            this.setState(prevState => {
                return {
                    output: `${prevState.output === 0 ? currentButtonClicked : prevState.output + currentButtonClicked}`
                }
            })
        }

        clear

    render(){
        return (
            <main className="baseboard">
                <OutputDisplay placeThisOnScreen={this.state.output}/>
                <ClearButton/>
                <DivisionButton/>
                <SevenButton handleClick={this.handleClick}/>
                <EightButton handleClick={this.handleClick}/>
                <NineButton handleClick={this.handleClick}/>
                <MultiplicationButton/>
                <FourButton handleClick={this.handleClick}/>
                <FiveButton handleClick={this.handleClick}/>
                <SixButton handleClick={this.handleClick}/>
                <AdditionButton/>
                <OneButton handleClick={this.handleClick}/>
                <TwoButton handleClick={this.handleClick}/>
                <ThreeButton handleClick={this.handleClick}/>
                <SubtractionButton/>
                <DecimalButton/>
                <ZeroButton handleClick={this.handleClick}/>
                <EqualsButton/>
            </main>
        )
            
    }
}

export default CalculatorBase;