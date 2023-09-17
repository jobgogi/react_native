import React, { useState } from 'react';

export const useCalculator = () => {
  const [input, setInput] = useState(0); // 입력한 숫자
  const [currentOperator, setCurrentOperator] = useState(null); // 계산 방식
  const [result, setResult] = useState(null); // 결과값
  const [tempInput, setTempInput] = useState(null); // 마지막에 입력한 숫자를 저장
  const [tempOperator, setTempOperator] = useState(null); // 마지막 계산 방식을 저장
  const [isClickedOperator, setIsClickedOperator] = useState(false);
  const [isClickedEqual, setIsClickedEqual] = useState(false);
  const hasInput = !!input;

  const onPressNum = (num) => {
    if (currentOperator && isClickedOperator) {
      setResult(input);
      setInput(num);
      setIsClickedOperator(false);
    } else {
      const newInput = Number(`${input}${num}`);
      setInput(newInput);
    }
  };

  const onPressOperator = (operator) => {
    if (operator !== '=') {
      setCurrentOperator(operator);
      setIsClickedOperator(true);
      setIsClickedEqual(false);
    } else {
      let finalResult = null;
      const finalInput = isClickedEqual ? tempInput : input;
      const finalOperator = isClickedEqual ? tempOperator : currentOperator;

      switch (finalOperator) {
        case '+':
          finalResult = result + finalInput;
          break;
        case '-':
          finalResult = result - finalInput;
          break;
        case '*':
          finalResult = result * finalInput;
          break;
        case '/':
          finalResult = result / finalInput;
          break;
        default:
          break;
      }

      setResult(finalResult);
      setInput(finalResult);
      setTempInput(finalInput);
      setTempOperator(finalOperator);
      setCurrentOperator(null);
      setIsClickedEqual(true);
    }
  };

  const onPressResult = () => {
    if (hasInput) {
      setInput(0);
    } else {
      setInput(0);
      setCurrentOperator(null);
      setResult(null);
      setTempInput(null);
      setTempOperator(null);
    }
  };

  return {
    input,
    currentOperator,
    result,
    tempInput,
    tempOperator,
    hasInput,
    onPressResult,
    onPressNum,
    onPressOperator,
  };
};