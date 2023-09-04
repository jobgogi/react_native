import { Image, Text, View } from "react-native";
import Margin from "./Margin";

const Profile = (props) => {
  const { uri, name, introduction, isMe } = props;

  const size = isMe ? 50 : 40;

  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        source={{ uri }}
        style={{
          width: size,
          height: size,
          borderRadius: size * 0.4,
        }}
        />
      <View style={{ justifyContent: 'center', marginLeft: 10 }}>
        <Text
          style={{
            fontWeight: isMe ? 'bold' : null,
            fontSize: isMe ? 16 : 14,
          }}>
            {name}
        </Text>
        {!!introduction && (
          <View>
            <Margin height={isMe ? 6 : 2} />
            <Text style={{ fontSize: isMe ? 12 : 11, color: 'gray' }}>{introduction}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Profile;