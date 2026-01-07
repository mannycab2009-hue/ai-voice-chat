# 🎤 AI Voice Chat

A beautiful, modern dark mode AI voice chat app built with **Expo** and **React Native**. Talk naturally with an AI using real-time speech-to-text and text-to-speech capabilities.

## 🌟 Features

- **Voice Input**: Speak naturally and have your speech converted to text
- **AI Responses**: Get intelligent replies powered by OpenAI or your preferred LLM
- **Voice Output**: Hear AI responses read aloud with natural-sounding speech
- **Beautiful UI**: Modern dark mode design with smooth animations
- **Clean Chat History**: View all conversations in an elegant scrollable interface
- **Cross-Platform**: Works seamlessly on iOS and Android via Expo
- **Low Latency**: Fast response times for a natural conversational feel

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- Expo CLI: `npm install -g expo-cli`
- OpenAI API key (or alternative LLM API)

### Installation

```bash
# Clone the repository
git clone https://github.com/mannycab2009-hue/ai-voice-chat.git
cd ai-voice-chat

# Install dependencies
npm install

# Add your API key
echo "EXPO_PUBLIC_OPENAI_API_KEY=your_key_here" > .env.local
```

### Run the App

```bash
# Start Expo
npx expo start

# Then:
# - Press 'i' for iOS simulator
# - Press 'a' for Android emulator
# - Scan QR code with Expo Go app on your device
```

## 📁 Project Structure

```
ai-voice-chat/
├── app/
│   ├── (tabs)/              # Tab-based navigation
│   │   ├── chat.tsx        # Main chat interface
│   │   └── settings.tsx    # App settings
│   └── _layout.tsx         # Root layout
├── components/
│   ├── ChatBubble.tsx      # Message bubble component
│   ├── VoiceButton.tsx     # Mic button component
│   └── ThemedText.tsx      # Themed text components
├── hooks/
│   ├── useVoiceChat.ts     # Voice chat logic
│   └── useTheme.ts         # Theme management
├── services/
│   ├── openai.ts           # OpenAI API integration
│   └── speech.ts           # Speech-to-text & text-to-speech
├── constants/
│   ├── Colors.ts           # Color palette
│   └── Styling.ts          # Style constants
└── app.json                # Expo configuration
```

## 🎨 Design Highlights

- **Dark Mode**: Eye-friendly OLED-optimized dark theme
- **Smooth Animations**: Subtle transitions and micro-interactions
- **Responsive Layout**: Perfect spacing and typography
- **Glassmorphism**: Modern frosted glass effect for chat bubbles
- **Color Accent**: Vibrant accent color for AI messages

## 🔧 Configuration

Edit `app.json` to customize:

```json
{
  "expo": {
    "name": "AI Voice Chat",
    "slug": "ai-voice-chat",
    "scheme": "ai-voice-chat"
  }
}
```

## 🔐 Environment Variables

Create a `.env.local` file:

```env
EXPO_PUBLIC_OPENAI_API_KEY=sk-...
EXPO_PUBLIC_API_ENDPOINT=https://api.openai.com/v1
```

## 📱 Supported Platforms

- ✅ iOS 12.0+
- ✅ Android 5.0+
- ✅ Web (limited voice features)

## 📚 Tech Stack

- **React Native**: Cross-platform mobile development
- **Expo**: Easy development and deployment
- **TypeScript**: Type-safe code
- **Expo Speech**: Text-to-speech functionality
- **OpenAI API**: AI-powered conversations
- **Tamagui** (Optional): Advanced UI components

## 🎯 Usage

1. **Tap the Mic Button**: Start recording your voice
2. **Speak**: Talk naturally, the app will transcribe in real-time
3. **Get Response**: The AI responds and speaks back to you
4. **View History**: Scroll up to see previous messages

## 🛠️ Development

### Adding New Features

```bash
# Create a new component
npx expo generate component MyComponent

# Create a new hook
touch hooks/useMyHook.ts
```

### Testing

```bash
# Run tests
npm test

# Watch mode
npm test -- --watch
```

## 🐛 Troubleshooting

**Mic not working?**
- Check app permissions in device settings
- Restart the Expo server

**No API response?**
- Verify your OpenAI API key
- Check network connectivity

**Audio not playing?**
- Ensure device is not on silent mode
- Check volume settings

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Support

Have questions? Open an issue on GitHub or reach out!

---

**Made with ❤️ by [mannycab2009-hue](https://github.com/mannycab2009-hue)**
