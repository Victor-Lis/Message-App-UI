import { View, Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import { MessageProps } from "../../@types/message";
export default function Message(
{
    item, 
    messageStyle
}:{
    item: MessageProps,
    messageStyle: StyleProp<TextStyle>,
}) {

  return (
    <Text
      style={[
        styles.message,
        messageStyle,
      ]}
    >
      {item.message}
    </Text>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      padding: 32,
    },
    message: {
      padding: 16,
      borderRadius: 12,
      marginBottom: 12,
    },
    myMessage: {
      color: "#FFFFFF",
      backgroundColor: "#105DFB",
      alignSelf: "flex-end",
      borderBottomRightRadius: 0,
    },
    friendMessage: {
      color: "#000000",
      backgroundColor: "#D7D7D7",
      alignSelf: "flex-start",
      borderBottomLeftRadius: 0,
    },
})