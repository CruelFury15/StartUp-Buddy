import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const botResponses = [
  "Great question! Based on your profile, I'd recommend focusing on SaaS solutions with low initial investment.",
  "Have you considered validating your idea with a small MVP first? This reduces risk significantly.",
  "Your runway looks healthy! Consider allocating 20% for marketing once you launch.",
  "For a technical co-founder, look for someone with full-stack experience and startup mindset.",
  "The competitor analysis shows moderate saturation. Differentiation will be key to success!",
];

export function Chatbot() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! I'm your AI Mentor. How can I help you with your startup journey today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-2xl shadow-lg z-50 flex items-center gap-2 ${
          theme === 'dark' ? 'bg-[#22C55E]' : 'bg-[#16A34A]'
        }`}
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="text-white font-medium hidden sm:block">Ask AI Mentor</span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] rounded-2xl shadow-2xl z-50 overflow-hidden ${
              theme === 'dark'
                ? 'bg-[#111827] border border-[#1F2937]'
                : 'bg-white border border-[#E5E7EB]'
            }`}
          >
            {/* Header */}
            <div className={`p-4 flex items-center justify-between ${
              theme === 'dark' ? 'bg-[#0F172A]' : 'bg-[#F9FAFB]'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${
                  theme === 'dark' ? 'bg-[#22C55E]' : 'bg-[#16A34A]'
                }`}>
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className={`font-semibold ${
                    theme === 'dark' ? 'text-[#F9FAFB]' : 'text-[#111827]'
                  }`}>
                    AI Mentor
                  </h4>
                  <p className={`text-xs ${
                    theme === 'dark' ? 'text-[#22C55E]' : 'text-[#16A34A]'
                  }`}>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`p-2 rounded-xl transition-colors ${
                  theme === 'dark'
                    ? 'hover:bg-[#1F2937] text-[#F9FAFB]'
                    : 'hover:bg-[#E5E7EB] text-[#111827]'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-2 ${
                    message.sender === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className={`p-2 rounded-xl shrink-0 ${
                    message.sender === 'bot'
                      ? theme === 'dark' ? 'bg-[#22C55E]' : 'bg-[#16A34A]'
                      : theme === 'dark' ? 'bg-[#1F2937]' : 'bg-[#E5E7EB]'
                  }`}>
                    {message.sender === 'bot' 
                      ? <Bot className="w-4 h-4 text-white" />
                      : <User className={`w-4 h-4 ${theme === 'dark' ? 'text-[#F9FAFB]' : 'text-[#111827]'}`} />
                    }
                  </div>
                  <div className={`px-4 py-3 rounded-2xl max-w-[80%] ${
                    message.sender === 'bot'
                      ? theme === 'dark'
                        ? 'bg-[#0F172A] text-[#F9FAFB]'
                        : 'bg-[#F9FAFB] text-[#111827]'
                      : theme === 'dark'
                        ? 'bg-[#22C55E] text-white'
                        : 'bg-[#16A34A] text-white'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className={`p-4 border-t ${
              theme === 'dark' ? 'border-[#1F2937]' : 'border-[#E5E7EB]'
            }`}>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type your message..."
                  className={`flex-1 px-4 py-3 rounded-xl outline-none transition-all ${
                    theme === 'dark'
                      ? 'bg-[#0F172A] border border-[#1F2937] text-[#F9FAFB] placeholder:text-[#F9FAFB]/40 focus:border-[#22C55E]'
                      : 'bg-[#F9FAFB] border border-[#E5E7EB] text-[#111827] placeholder:text-[#111827]/40 focus:border-[#16A34A]'
                  }`}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={sendMessage}
                  className={`p-3 rounded-xl ${
                    theme === 'dark' ? 'bg-[#22C55E]' : 'bg-[#16A34A]'
                  }`}
                >
                  <Send className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
