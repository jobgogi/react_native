import { ScrollView, View } from 'react-native';
// import { getBottomSpace } from 'react-native-iphone-x-helper';
import Profile from './Profile';
import Margin from './Margin';

// const bottomSpace = getBottomSpace();

const FriendList = (props) => {
  if (!props.isOpened) return null;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      >
      {props.data.map((item, index) => (
        <View
          key={index}
          >
          <Profile
            uri={item.uri}
            name={item.name}
            introduction={item.introduction}
          />
          <Margin height={13} />
        </View>
      ))}
    </ScrollView>
  );
};

export default FriendList;
