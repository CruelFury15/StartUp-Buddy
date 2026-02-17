import { motion } from 'framer-motion';
import { Bot, MessageCircle, Lightbulb, Target, TrendingUp, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const mentorTopics = [
  {
    icon: Lightbulb,
    title: 'Idea Validation',
    description: 'Get feedback on your startup idea and market fit',
  },
  {
    icon: Target,
    title: 'Go-to-Market Strategy',
    description: 'Learn how to launch and acquire your first customers',
  },
  {
    icon: TrendingUp,
    title: 'Growth Tactics',
    description: 'Scale your startup with proven growth strategies',
  },
  {
    icon: Users,
    title: 'Team Building',
    description: 'Advice on hiring and building your dream team',
  },
];

export function Mentor() {
  const { theme } = useTheme();

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
          theme === 'dark' ? 'bg-[#22C55E]' : 'bg-[#16A34A]'
        }`}>
          <Bot className="w-10 h-10 text-white" />
        </div>
        <h1 className={`text-3xl font-bold mb-3 ${
          theme === 'dark' ? 'text-[#F9FAFB]' : 'text-[#111827]'
        }`}>
          AI Mentor
        </h1>
        <p className={`text-lg ${
          theme === 'dark' ? 'text-[#F9FAFB]/60' : 'text-[#111827]/60'
        }`}>
          Your personal startup advisor powered by AI. Get instant guidance on any aspect of your entrepreneurial journey.
        </p>
      </motion.div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mentorTopics.map((topic, index) => {
          const Icon = topic.icon;
          return (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`p-5 rounded-xl cursor-pointer transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-[#111827] border border-[#1F2937] hover:border-[#22C55E]/50'
                  : 'bg-white border border-[#E5E7EB] shadow-sm hover:border-[#16A34A]/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl shrink-0 ${
                  theme === 'dark' ? 'bg-[#22C55E]/20' : 'bg-[#DCFCE7]'
                }`}>
                  <Icon className={`w-6 h-6 ${theme === 'dark' ? 'text-[#22C55E]' : 'text-[#16A34A]'}`} />
                </div>
                <div>
                  <h3 className={`font-semibold mb-1 ${
                    theme === 'dark' ? 'text-[#F9FAFB]' : 'text-[#111827]'
                  }`}>
                    {topic.title}
                  </h3>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-[#F9FAFB]/60' : 'text-[#111827]/60'
                  }`}>
                    {topic.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={`p-8 rounded-xl text-center ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-[#22C55E]/20 to-[#16A34A]/10 border border-[#22C55E]/20'
            : 'bg-gradient-to-br from-[#DCFCE7] to-[#F0FDF4] border border-[#16A34A]/20'
        }`}
      >
        <MessageCircle className={`w-12 h-12 mx-auto mb-4 ${
          theme === 'dark' ? 'text-[#22C55E]' : 'text-[#16A34A]'
        }`} />
        <h3 className={`text-xl font-bold mb-2 ${
          theme === 'dark' ? 'text-[#F9FAFB]' : 'text-[#111827]'
        }`}>
          Start a Conversation
        </h3>
        <p className={`text-sm mb-4 ${
          theme === 'dark' ? 'text-[#F9FAFB]/60' : 'text-[#111827]/60'
        }`}>
          Click the chat button in the bottom right corner to start talking with your AI Mentor
        </p>
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium ${
          theme === 'dark' ? 'bg-[#22C55E]/30 text-[#22C55E]' : 'bg-[#16A34A]/20 text-[#16A34A]'
        }`}>
          <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
          AI Mentor is online
        </div>
      </motion.div>
    </div>
  );
}
