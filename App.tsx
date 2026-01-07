import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import * as Speech from 'expo-speech';
import { Colors } from './constants/Colors';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

const App = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      role: 'assistant',
      text: '👋 Hello! I\'m your AI assistant. Type something or tap the mic to speak!',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (userText: string) => {
    if (!userText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: userText,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: `I received: "${userText}". This is a demo response!`,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      Speech.speak(aiMessage.text);
      setIsLoading(false);
    }, 500);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🎤 AI Voice Chat</Text>
        <Text style={styles.headerSubtitle}>Beautiful Dark Mode</Text>
      </View>

      <ScrollView style={styles.messagesContainer}>
        {messages.map(msg => (
          <View
            key={msg.id}
            style={[
              styles.messageBubble,
              msg.role === 'user' ? styles.userBubble : styles.aiBubble,
            ]}
          >
            <Text
              style={[
                styles.messageText,
                msg.role === 'user' ? styles.userText : styles.aiText,
              ]}
            >
              {msg.text}
            </Text>
          </View>
        ))}
        {isLoading && (
          <View style={[styles.messageBubble, styles.aiBubble]}>
            <Text style={styles.aiText}>✨ Thinking...</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          placeholderTextColor={Colors.text.tertiary}
          value={input}
          onChangeText={setInput}
          multiline
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => sendMessage(input)}
          disabled={isLoading}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg.primary,
  },
  header: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: Colors.bg.secondary,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.light,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text.primary,
  },
  headerSubtitle: {
    fontSize: 12,
    color: Colors.text.secondary,
    marginTop: 4,
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  messageBubble: {
    marginVertical: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 16,
    maxWidth: '85%',
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.chat.user,
  },
  aiBubble: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.chat.ai,
    borderWidth: 1,
    borderColor: Colors.chat.aiAccent,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
  },
  userText: {
    color: Colors.text.primary,
  },
  aiText: {
    color: Colors.accent.primary,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: Colors.bg.secondary,
    borderTopWidth: 1,
    borderTopColor: Colors.border.light,
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: Colors.bg.tertiary,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: Colors.text.primary,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: Colors.accent.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    color: Colors.bg.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default App;
