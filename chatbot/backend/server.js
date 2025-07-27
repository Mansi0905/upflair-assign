const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const responses = {
  "hello": "Hi there! How can I help you?",
  "hi": "Hello! How can I assist you?",
  "bye": "Goodbye! Have a great day!",
  "who are you": "I'm your friendly chatbot.",
  "help": "Sure, I can help you. Ask me anything!",
  "what's your name": "I'm ChatBot 1.0",
  "how are you": "I'm just code, but I'm running great!",
  "thank you": "You're welcome!",
  "thanks": "Glad to help!",
  "what can you do": "I can answer your questions and assist you.",
  "weather": "I can't fetch weather yet, but it’s always sunny in the cloud!",
  "time": `It's currently ${new Date().toLocaleTimeString()}`,
  "date": `Today's date is ${new Date().toLocaleDateString()}`,
  "your creator": "I was created by a developer just like you!",
  "open google": "Just type google.com in your browser!",
  "joke": "Why don’t programmers like nature? Too many bugs.",
  "fact": "Did you know? JavaScript was created in just 10 days.",
  "language": "I'm built using JavaScript and Node.js.",
  "framework": "React is my frontend framework!",
  "version": "You're using ChatBot v1.0",
  "repeat": "Sure, I can repeat things. What do you want me to repeat?",
  "good morning": "Good morning! ☀️",
  "good night": "Good night! 🌙",
  "who made you": "A cool dev who loves JavaScript!",
  "default": "I didn't understand that. Try asking something else.",
  "where are you": "I'm running on a local server!",
  "your age": "I'm timeless!",
  "favorite color": "I like green. It reminds me of success.",
  "sing": "La la la 🎵 (just kidding, I can’t sing).",
  "dance": "I can’t dance but I can debug!",
  "movie": "My favorite movie is The Matrix.",
  "music": "I like anything coded in rhythm!",
  "your job": "My job is to help you.",
  "chat": "Yes! Let's chat!",
  "are you real": "As real as code can be!",
  "story": "Once upon a time, a dev built me and we’re chatting now!",
  "location": "I'm hosted on localhost:5000",
  "status": "I'm alive and kicking!",
  "commands": "I understand 50 commands. Try 'hello', 'bye', 'help'...",
  "list": "Here's a few: hello, help, joke, time, date, story, weather...",
  "owner": "I'm yours!",
  "play music": "I can't, but I can hum a virtual tune!",
  "motivation": "Keep going! You're doing amazing 💪",
  "support": "I'm here to support you!",
  "quote": "“Code is like humor. When you have to explain it, it’s bad.”",
  "clear": "I can't clear your history yet.",
  "love": "I’m just a bot, but I heart you 💖",
  "good job": "Thanks! You’re doing awesome too!"
};

app.post('/api/message', (req, res) => {
  const { message } = req.body;
  const lowerMsg = message.toLowerCase().trim();

  const reply = responses[lowerMsg] || responses["default"];
  res.json({ reply });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
