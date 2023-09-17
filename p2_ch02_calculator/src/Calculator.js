import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styled from 'styled-components/native';
import { useCalculator } from './useCalculator';

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
  const {
    input,
    currentOperator,
    result,
    tempInput,
    tempOperator,
    hasInput,
    onPressResult,
    onPressNum,
    onPressOperator,
  } = useCalculator();

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