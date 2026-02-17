import { motion } from 'framer-motion';
import { User, Bell, Shield, Palette, Globe, LogOut } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const settingsSections = [
  {
    title: 'Account',
    items: [
      { icon: User, label: 'Profile Settings', description: 'Manage your account details' },
      { icon: Bell, label: 'Notifications', description: 'Configure notification preferences' },
      { icon: Shield, label: 'Security', description: 'Password and authentication' },
    ]
  },
  {
    title: 'Preferences',
    items: [
      { icon: Palette, label: 'Appearance', description: 'Theme and display settings' },
      { icon: Globe, label: 'Language', description: 'Choose your preferred language' },
    ]
  }
];

export function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={`text-3xl font-bold mb-2 ${
          theme === 'dark' ? 'text-[#F9FAFB]' : 'text-[#111827]'
        }`}>
          Settings
        </h1>
        <p className={`text-lg ${
          theme === 'dark' ? 'text-[#F9FAFB]/60' : 'text-[#111827]/60'
        }`}>
          Manage your account and preferences
        </p>
      </motion.div>

      {/* Settings Sections */}
      {settingsSections.map((section, sectionIndex) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: sectionIndex * 0.1 }}
        >
          <h2 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
            theme === 'dark' ? 'text-[#F9FAFB]/40' : 'text-[#111827]/40'
          }`}>
            {section.title}
          </h2>
          <div className={`rounded-xl overflow-hidden ${
            theme === 'dark'
              ? 'bg-[#111827] border border-[#1F2937]'
              : 'bg-white border border-[#E5E7EB] shadow-sm'
          }`}>
            {section.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  whileHover={{ backgroundColor: theme === 'dark' ? '#1F2937' : '#F9FAFB' }}
                  className={`p-4 flex items-center justify-between cursor-pointer transition-colors ${
                    index !== section.items.length - 1 
                      ? theme === 'dark' ? 'border-b border-[#1F2937]' : 'border-b border-[#E5E7EB]'
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl ${
                      theme === 'dark' ? 'bg-[#1F2937]' : 'bg-[#F9FAFB]'
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        theme === 'dark' ? 'text-[#F9FAFB]' : 'text-[#111827]'
                      }`} />
                    </div>
                    <div>
                      <h3 className={`font-medium ${
                        theme === 'dark' ? 'text-[#F9FAFB]' : 'text-[#111827]'
                      }`}>
                        {item.label}
                      </h3>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-[#F9FAFB]/60' : 'text-[#111827]/60'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <span className={theme === 'dark' ? 'text-[#F9FAFB]/40' : 'text-[#111827]/40'}>
                    →
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}

      {/* Theme Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`p-4 rounded-xl flex items-center justify-between ${
          theme === 'dark'
            ? 'bg-[#111827] border border-[#1F2937]'
            : 'bg-white border border-[#E5E7EB] shadow-sm'
        }`}
      >
        <div className="flex items-center gap-4">
          <div className={`p-2.5 rounded-xl ${
            theme === 'dark' ? 'bg-[#22C55E]/20' : 'bg-[#DCFCE7]'
          }`}>
            <Palette className={`w-5 h-5 ${
              theme === 'dark' ? 'text-[#22C55E]' : 'text-[#16A34A]'
            }`} />
          </div>
          <div>
            <h3 className={`font-medium ${
              theme === 'dark' ? 'text-[#F9FAFB]' : 'text-[#111827]'
            }`}>
              Dark Mode
            </h3>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-[#F9FAFB]/60' : 'text-[#111827]/60'
            }`}>
              Toggle dark theme
            </p>
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className={`w-14 h-8 rounded-full relative transition-colors ${
            theme === 'dark' ? 'bg-[#22C55E]' : 'bg-[#E5E7EB]'
          }`}
        >
          <motion.div
            animate={{ x: theme === 'dark' ? 26 : 4 }}
            className="w-6 h-6 bg-white rounded-full absolute top-1 shadow-sm"
          />
        </motion.button>
      </motion.div>

      {/* Logout Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className={`w-full p-4 rounded-xl flex items-center justify-center gap-2 transition-colors ${
          theme === 'dark'
            ? 'bg-[#EF4444]/10 text-[#EF4444] hover:bg-[#EF4444]/20'
            : 'bg-[#FEE2E2] text-[#EF4444] hover:bg-[#FECACA]'
        }`}
      >
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Log Out</span>
      </motion.button>
    </div>
  );
}
