import { useState } from "react"
import {
  View,
  FlatList,
  StyleSheet,
} from "react-native"
import { MessageProps } from "./src/@types/message"
import Message from "./src/components/Message"
import Footer from "./src/components/Footer"

const INITIAL_MESSAGES = [
  { id: "1", user_id: "1", message: "Oi" },
  { id: "2", user_id: "2", message: "Oi" },
  { id: "3", user_id: "2", message: "Tudo bem?" },
].reverse()

const MY_ID = "1"

export default function App() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState(INITIAL_MESSAGES)

  function sendMessage() {
    if (message.trim().length > 0) {
      const newMessage = {
        id: new Date().getTime().toString(),
        user_id: MY_ID,
        message,
      }

      setMessages((prevState) => [newMessage, ...prevState])
      setMessage("")
    }
  }

  function isMyMessage(item: MessageProps){
    return item.user_id === MY_ID ? styles.myMessage : styles.friendMessage
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        inverted
        renderItem={({ item }) => (
          <Message key={item.id} item={item} messageStyle={isMyMessage(item)}/>
        )}
      />
      <Footer message={message} setMessage={setMessage} sendMessage={sendMessage}/>
    </View>
  )
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