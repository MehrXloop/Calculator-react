import React from 'react'
import InputBox from './InputBox'
import Button from './Button'
import './Calculator.css'
import { useState } from 'react'

function Calculator() {
  const [input, setInput] = useState(0)
  const [calculation, setCalculation] = useState({
    num1: 0,
    operator: '',
    num2: 0
  })
  function handleNumbers(e) {
    if (input === 0) {
      setInput(e.target.value);
    }
    else {
      setInput(input + e.target.value)
    }
    if (calculation.operator === '') {
      if (calculation.num1 === 0) {

        setCalculation(prev => ({
          num1: e.target.value,
          operator: '',
          num2: 0
        }))
      }
      else {
        setCalculation(prev => ({
          num1: prev.num1 + e.target.value,
          operator: '',
          num2: 0
        }))
      }
    }
    else {
      if (calculation.num2 === 0) {
        setCalculation(prev => ({
          num1: prev.num1,
          operator: prev.operator,
          num2: e.target.value
        }))
      }
      else {
        setCalculation(prev => ({
          num1: prev.num1,
          operator: prev.operator,
          num2: prev.num2 + e.target.value
        }))
      }
    }
  }
  function handleOperators(e) {
    if (input !== 0 && calculation.operator === '') {
      setInput(input + e.target.value);
      setCalculation(prev => ({
        num1: prev.num1,
        operator: e.target.value,
        num2: prev.num2
      }))
    }
  }
  function handleReset() {
    setInput(0);
    setCalculation(prev => ({
      num1: 0,
      operator: '',
      num2: 0
    }))
  }
  function handleResult(e) {
    let result;
    console.log(calculation)
    switch (calculation.operator) {
      case '+':
        result = parseInt(calculation.num1) + parseInt(calculation.num2);
        break;
      case '-':
        result = parseInt(calculation.num1) - parseInt(calculation.num2);
        break;
      case '*':
        result = parseInt(calculation.num1) * parseInt(calculation.num2);
        break;
      case '/':
        result = parseInt(calculation.num1) / parseInt(calculation.num2);
        break;
      default:
        break;
    }
    setInput(result);
    setCalculation(prev => ({
      num1: result,
      operator: '',
      num2: 0
    }))
  }
  return (
    <div className='calc'>
      <InputBox value={input} />
      <div>
        <Button onClick={handleReset} className='btn btn-secondary'>C</Button>
        <Button onClick={handleReset} className='btn btn-secondary'>X</Button>
        <Button className='btn btn-secondary'>%</Button>
        <Button onClick={handleOperators} className='btn btn-secondary'>/</Button>
      </div>
      <div>
        <Button onClick={handleNumbers} className='btn btn-primary'>7</Button>
        <Button onClick={handleNumbers} className='btn btn-primary'>8</Button>
        <Button onClick={handleNumbers} className='btn btn-primary'>9</Button>
        <Button onClick={handleOperators} className='btn btn-secondary'>*</Button>
      </div>
      <div>
        <Button onClick={handleNumbers} className='btn btn-primary'>4</Button>
        <Button onClick={handleNumbers} className='btn btn-primary'>5</Button>
        <Button onClick={handleNumbers} className='btn btn-primary'>6</Button>
        <Button onClick={handleOperators} className='btn btn-secondary'>-</Button>
      </div>
      <div>
        <Button onClick={handleNumbers} className='btn btn-primary'>1</Button>
        <Button onClick={handleNumbers} className='btn btn-primary'>2</Button>
        <Button onClick={handleNumbers} className='btn btn-primary'>3</Button>
        <Button onClick={handleOperators} className='btn btn-secondary'>+</Button>
      </div>
      <div>
        <Button className='btn'></Button>
        <Button onClick={handleNumbers} className='btn btn-primary'>0</Button>
        <Button className='btn '></Button>
        <Button onClick={handleResult} className='btn btn-secondary'>=</Button>
      </div>
    </div>
  )
}

export default Calculator