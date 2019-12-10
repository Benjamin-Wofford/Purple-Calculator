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
        this.handleClear = this.handleClear.bind(this)
        this.handleEquals = this.handleEquals.bind(this)
    }

        handleClick(currentButtonClicked){
            this.setState(prevState => {
                return {
                    output: `${prevState.output === 0 ? currentButtonClicked : prevState.output + currentButtonClicked}`
                }
            })
        }

        handleClear(){
            this.setState({output: 0})
        }

        handleEquals(){
        
          this.setState(prevState => {
                    return {
                        output: isNaN(prevState.output.slice(-1)) ? prevState.output : eval(prevState.output)
                    }
                })
            }
        


    render(){
        return (
            <main className="baseboard">
                <OutputDisplay placeThisOnScreen={this.state.output}/>
                <ClearButton handleClear={this.handleClear}/>
                <DivisionButton handleClick={this.handleClick}/>
                <SevenButton handleClick={this.handleClick}/>
                <EightButton handleClick={this.handleClick}/>
                <NineButton handleClick={this.handleClick}/>
                <MultiplicationButton handleClick={this.handleClick} />
                <FourButton handleClick={this.handleClick}/>
                <FiveButton handleClick={this.handleClick}/>
                <SixButton handleClick={this.handleClick}/>
                <AdditionButton handleClick={this.handleClick}/>
                <OneButton handleClick={this.handleClick}/>
                <TwoButton handleClick={this.handleClick}/>
                <ThreeButton handleClick={this.handleClick}/>
                <SubtractionButton handleClick={this.handleClick}/>
                <DecimalButton handleClick={this.handleClick}/>
                <ZeroButton handleClick={this.handleClick}/>
                <EqualsButton handleEquals={this.handleEquals}/>
            </main>
        )
            
    }
}

export default CalculatorBase;