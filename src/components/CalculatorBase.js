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

    render(){
        return (
            <main className="baseboard">
                <OutputDisplay/>
                <ClearButton/>
                <DivisionButton/>
                <SevenButton/>
                <EightButton/>
                <NineButton/>
                <SubtractionButton/>
                <FourButton/>
                <FiveButton/>
                <SixButton/>
                <AdditionButton/>
                <OneButton/>
                <TwoButton/>
                <ThreeButton/>
                <MultiplicationButton/>
                <DecimalButton/>
                <ZeroButton/>
                <EqualsButton/>
            </main>
        )
            
    }
}

export default CalculatorBase;