import { FlatList, StyleSheet, Text, SafeAreaView } from 'react-native';
import { getCalendarColumns } from './src/util';
import dayjs from 'dayjs';
import { useEffect } from 'react';

export default function App() {
  const now = dayjs();
  const columns = getCalendarColumns(now);

  useEffect(() => {
    console.log('columns', columns);
  }, []);

  const renderItem = ({ item: date, index }) => {
    const dateText = dayjs(date).get('date');
    return (
      <Text>{dateText} / {index + 1}</Text>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={columns}
        renderItem={renderItem}
        />
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
