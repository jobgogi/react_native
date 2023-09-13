import { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Calculator from './src/Calculator';

export default function App() {
  const [input, setInput] = useState(0); // 입력한 숫자
  const [currentOperator, setCurrentOperator] = useState(null); // 계산 방식
  const [result, setResult] = useState(null); // 결과값
  const [tempInput, setTempInput] = useState(null); // 마지막에 입력한 숫자를 저장
  const [tempOperator, setTempOperator] = useState(null); // 마지막 계산 방식을 저장

  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
