import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/Header';
import Profile from './src/Profile';
import Margin from './src/Margin';
import Division from './src/Division';
import FriendSection from './src/FriendSection';
import { friendProfiles, myProfile } from './src/data';
import FriendList from './src/FriendList';
import TabBar from './src/TabBar';

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    console.log('onPressArrow');
    setIsOpened(!isOpened);
  };

  const ItemSeparatorComponent = () => <Margin height={13} />;
  const renderItem = ({ item }) => (
    <Profile
      uri={item.uri}
      name={item.name}
      introduction={item.introduction}
      isMe={false}
      />
  )

  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: 'white' }}>
      <Header />
      <Margin height={10} />
      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={true}
      />
      <Margin height={15} />
      <Division />
      <Margin height={12} />
      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}
        />
      <Margin height={5} />
    </View>
  );

  const ListFooterComponent = () => <Margin height={10} />;

  return (
    <SafeAreaProvider>
      <SafeAreaView
        edges={['top', 'right', 'bottom', 'left']}
        style={styles.container}
        >
        <FlatList
          data={isOpened ? friendProfiles : []}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          keyExtractor={(_, index) => index}
          stickyHeaderIndices={[0]}
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={renderItem}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
          showsVerticalScrollIndicator={false}
        />
        <TabBar
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
          />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
