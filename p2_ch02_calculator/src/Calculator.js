import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styled from 'styled-components/native';

// Button type : 'reset' | 'operator' | 'num'
const Button = ({ text, onPress, flex, type, isSelected }) => {
  const backgroundColor =
    type === 'reset'
      ? COLOR.RESET
      : type === 'operator'
        ? COLOR.OPERATOR
        : type === 'num'
          ? COLOR.NUM
          : 'transparent';

  return (
    <TouchableOpacity
      style={{
        flex,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderWidth: isSelected ? 1.0 : 0.2,
        borderColor: 'black'
      }}
      onPress={onPress}
      >
      <Text
        style={{
          color: 'white',
          fontSize: 25,
        }}>
          {text}
      </Text>
    </TouchableOpacity>
  );
};

const COLOR = {
  RESULT: '#434c51',
  RESET: '#5f5e62',
  OPERATOR: '#f39c29',
  NUM: '#5c5674'
};

const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

const InputContainer = styled.View`
  background-color: ${COLOR.RESULT};
  min-height: 50px;
  justify-content: center;
  align-items: flex-end;
  padding: 10px 5px;
`;

export default () => {
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

  return (
    <View style={{ flex: 1, width: 250, justifyContent: 'center' }}>
      {/* 결과 */}
      <Text>input: {input}</Text>
      <Text>currentOperator: {currentOperator}</Text>
      <Text>result: {result}</Text>
      <Text>tempInput: {tempInput}</Text>
      <Text>tempOperator: {tempOperator}</Text>
      <InputContainer>
        <Text style={{ color: 'white', fontSize: 35, textAlign: 'right' }}>{input}</Text>
      </InputContainer>
      {/* [AC ~ /] */}
      <ButtonContainer>
        <Button
          type="reset"
          text={hasInput ? 'C' : 'AC'}
          onPress={onPressResult}
          flex={3}
          />
        <Button
          type="operator"
          text="/"
          onPress={() => onPressOperator('/')}
          isSelected={currentOperator === '/'}
          flex={1}
          />
      </ButtonContainer>
      {/* [7 ~ x] */}
      <ButtonContainer>
        {[7, 8, 9].map((value) => (
          <Button
            key={`num_${value}`}
            type="num"
            text={`${value}`}
            onPress={() => onPressNum(value)}
            flex={1}
            />
        ))}
        <Button
          type="operator"
          text="*"
          onPress={() => onPressOperator('*')}
          isSelected={currentOperator === '*'}
          flex={1}
          />
      </ButtonContainer>
      {/* [4 ~ -] */}
      <ButtonContainer>
        {[4, 5, 6].map((value) => (
          <Button
            key={`num_${value}`}
            type="num"
            text={`${value}`}
            onPress={() => onPressNum(value)}
            flex={1}
            />
        ))}
        <Button
          type="operator"
          text="-"
          onPress={() => onPressOperator('-')}
          isSelected={currentOperator === '-'}
          flex={1}
          />
      </ButtonContainer>
      {/* [1 ~ +] */}
      <ButtonContainer>
        {[1, 2, 3].map((value) => (
          <Button
            key={`num_${value}`}
            type="num"
            text={`${value}`}
            onPress={() => onPressNum(value)}
            flex={1}
            />
        ))}
        <Button
          type="operator"
          text="+"
          onPress={() => onPressOperator('+')}
          isSelected={currentOperator === '+'}
          flex={1}
          />
      </ButtonContainer>
      {/* [0 ~ =] */}
      <ButtonContainer>
        <Button
          type="num"
          text="0"
          onPress={() => onPressNum(0)}
          flex={3}
          />
        <Button
          type="operator"
          text="="
          onPress={() => onPressOperator('=')}
          flex={1}
          />
      </ButtonContainer>
    </View>
  )
};