import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/Header';
import MyProfile from './src/Profile';
import Margin from './src/Margin';
import Division from './src/Division';
import FriendSection from './src/FriendSection';
import { friendProfiles, myProfile } from './src/data';
import FriendList from './src/FriendList';

export default function App() {
  const [isOpened, setIsOpened] = useState(true);

  const onPressArrow = () => {
    console.log('onPressArrow');
    setIsOpened(!isOpened);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}>
        <Header />
        <Margin height={10} />
        <MyProfile
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
        />
        <Margin height={15} />
        <Division />
        <Margin height={12} />
        <FriendSection
          friendProfileLen={friendProfiles.length}
          onPressArrow={onPressArrow}
          isOpened={isOpened}
          />
        <FriendList
          data={friendProfiles}
          isOpened={isOpened}
          />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15
  },
});
