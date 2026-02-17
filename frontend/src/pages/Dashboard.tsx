import { motion } from 'framer-motion';
import { Wallet, ShieldAlert, GraduationCap, Lightbulb } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { SummaryCard } from '../components/SummaryCard';
import { StartupCard } from '../components/StartupCard';
import { CompetitorAnalyzer } from '../components/CompetitorAnalyzer';
import { RunwayCalculator } from '../components/RunwayCalculator';
import { PersonaReport } from '../components/PersonaReport';

const summaryData = [
  { title: 'Budget', value: '₹50,000', icon: Wallet },
  { title: 'Risk Profile', value: 'Medium Risk', icon: ShieldAlert },
  { title: 'Experience Level', value: 'Beginner', icon: GraduationCap },
  { title: 'Recommended Category', value: 'SaaS', icon: Lightbulb },
];

const startupRecommendations = [
  {
    title: 'AI Resume Builder',
    category: 'SaaS',
    confidenceScore: 87,
    riskLevel: 'Medium' as const,
  },
  {
    title: 'E-Learning Platform',
    category: 'EdTech',
    confidenceScore: 92,
    riskLevel: 'Low' as const,
  },
  {
    title: 'Crypto Trading Bot',
    category: 'FinTech',
    confidenceScore: 74,
    riskLevel: 'High' as const,
  },
];

const competitors = [
  { name: 'Resume.io', level: 'High' as const },
  { name: 'Zety', level: 'Medium' as const },
  { name: 'Canva Resume', level: 'Medium' as const },
];

export function Dashboard() {
  const { theme } = useTheme();

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-2"
      >
        <h1 className={`text-3xl font-bold mb-2 ${
          theme === 'dark' ? 'text-[#F9FAFB]' : 'text-[#111827]'
        }`}>
          Welcome back, Ashmita 👋
        </h1>
        <p className={`text-lg ${
          theme === 'dark' ? 'text-[#F9FAFB]/60' : 'text-[#111827]/60'
        }`}>
          Here's your startup journey overview
        </p>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryData.map((item, index) => (
          <SummaryCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Startup Recommendations */}
      <div>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className={`text-xl font-bold mb-4 ${
            theme === 'dark' ? 'text-[#F9FAFB]' : 'text-[#111827]'
          }`}
        >
          Top Startup Matches
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {startupRecommendations.map((startup, index) => (
            <StartupCard
              key={startup.title}
              {...startup}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Competitor Analyzer */}
        <CompetitorAnalyzer
          startupIdea="AI Resume Builder"
          competitors={competitors}
          saturationPercentage={65}
        />

        {/* Runway Calculator */}
        <RunwayCalculator />
      </div>

      {/* Co-Founder Persona Report */}
      <PersonaReport
        role="Technical Co-Founder"
        personality="Analytical, Problem Solver"
        skills={['React', 'Backend Development', 'System Design', 'DevOps']}
        strength="Execution focused"
        weakness="Needs business guidance"
      />
    </div>
  );
}
