import { TouchableOpacity, View } from 'react-native';
import { Fontisto, Ionicons } from '@expo/vector-icons';

const TabButton = ({
  isSelected,
  onPress,
  activeIconName,
  inActiveIconName,
  isIconFontisto,
  isIconIonicons
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={{
        flex: 1,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {isIconFontisto && (
          <Fontisto
            name={isSelected ? activeIconName : inActiveIconName}
            size={24}
            color="black"
            />
          )
        }
        {isIconIonicons && (
          <Ionicons
            name={isSelected ? activeIconName : inActiveIconName}
            size={24}
            color="black"
            />
          )
        }
    </TouchableOpacity>
  )
}

const TabBar = (props) => {
  const { selectedTabIdx, setSelectedTabIdx } = props;

  return (
    <View style={{
      width: '100%',
      height: 50,
      flexDirection: 'row',
      borderTopWidth: 0.5,
      borderTopColor: 'grey'
    }}>
      <TabButton
        isSelected={selectedTabIdx === 0}
        onPress={() => setSelectedTabIdx(0)}
        activeIconName={'person'}
        inActiveIconName={'persons'}
        isIconFontisto
        />
      <TabButton
        isSelected={selectedTabIdx === 1}
        onPress={() => setSelectedTabIdx(1)}
        activeIconName={'chatbubble'}
        inActiveIconName={'chatbubble-outline'}
        isIconIonicons
        />
      <TabButton
        isSelected={selectedTabIdx === 2}
        onPress={() => setSelectedTabIdx(2)}
        activeIconName={'pricetag'}
        inActiveIconName={'pricetag-outline'}
        isIconIonicons
        />
      <TabButton
        isSelected={selectedTabIdx === 3}
        onPress={() => setSelectedTabIdx(3)}
        activeIconName={'add-circle'}
        inActiveIconName={'add-circle-outline'}
        isIconIonicons
        />
    </View>
  );
};

export default TabBar;
