import { Dispatch, SetStateAction } from "react";
import { Feather } from "@expo/vector-icons"
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function Footer({
  message,
  setMessage,
  sendMessage
}: {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  sendMessage: () => void;
}) {
  return (
    <View style={styles.footer}>
      <TextInput
        style={styles.input}
        placeholder="Digite a mensagem aqui..."
        onChangeText={setMessage}
        value={message}
      />
      <TouchableOpacity
        style={styles.send}
        activeOpacity={0.7}
        onPress={sendMessage}
      >
        <Feather name="send" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 56,
    padding: 16,
    backgroundColor: "#d2d6da",
    borderRadius: 12,
  },
  send: {
    height: 56,
    width: 56,
    backgroundColor: "#105DFB",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    gap: 7,
  },
});
