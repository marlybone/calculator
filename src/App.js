import './App.css';
import React, { useState} from 'react'


const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [calcValue, setCalcValue] = useState('')
  const [currentValue, setCurrentValue] = useState('')

    /* we need to check if displayvalue contains decimal and if so return
    if an operator is pressed then displayvalue appends to a variable then display value returns to 0
    you can keep create additional equaitons in display value that appends to a variable until equals is clicked and then it caculates the summation of the variable
    */

  const handleClick = (digit) => {
      let operators = ['+', '/', '-', '*'];
      setCurrentValue(digit)
      if (digit === '.' && displayValue.includes('.')){
        return;
      } else if (digit === '0' && currentValue === '0') {
        return;
      } else if (operators.includes(currentValue) && digit === '-') {
        setDisplayValue(displayValue + digit);
        return;
      } else if (operators.includes(digit) && operators.includes(currentValue)){
        setDisplayValue(digit)
      } else if (Array.isArray(operators) === operators.includes(digit)) {
        setCalcValue((calcValue) => calcValue + displayValue);
        setDisplayValue(digit)
        console.log(displayValue, calcValue)
      } else setDisplayValue(displayValue === '0' ? digit : displayValue + digit)
      console.log(calcValue)
  }

  const handleEquals = () => {
    let finalEquation = calcValue+displayValue;
    let result = eval(finalEquation);
    handleDelete()
    return setDisplayValue(result)
  }

  const handleDelete = () => {
    setDisplayValue('0')
    setCalcValue('')
    setCurrentValue('')
  }


    return (
      <div className="container">
        <div className="calc">
          <input id='display' type="text" value={displayValue} readOnly />
           <div>
            <button id='clear' onClick={() => handleDelete('del')}>AC</button>
          </div>
          <div>
            <button id='seven' onClick={() => handleClick('7')}>7</button>
            <button id='eight' onClick={() => handleClick('8')}>8</button>
            <button id='nine' onClick={() => handleClick('9')}>9</button>
            <button id='divide' onClick={() => handleClick('/')}>÷</button>
          </div>
          <div>
            <button id='four' onClick={() => handleClick('4')}>4</button>
            <button id='five' onClick={() => handleClick('5')}>5</button>
            <button id='six' onClick={() => handleClick('6')}>6</button>
            <button id='multiply' onClick={() => handleClick('*')}>×</button>
          </div>
          <div>
            <button id='one' onClick={() => handleClick('1')}>1</button>
            <button id='two' onClick={() => handleClick('2')}>2</button>
            <button id='three' onClick={() => handleClick('3')}>3</button>
            <button id='subtract' onClick={() => handleClick('-')}>-</button>
          </div>
          <div>
            <button id='zero' onClick={() => handleClick('0')}>0</button>
            <button id='decimal' onClick={() => handleClick('.')}>.</button>
            <button onClick={() => handleEquals('=')}  id='equals'>=</button>
            <button id='add' onClick={() => handleClick('+')}>+</button>
          </div>
        </div>
      </div>
    );
}

export default App