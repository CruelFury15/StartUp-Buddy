import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Brain, Mail, Lock, ArrowRight } from 'lucide-react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const success = await login(email, password);
    if (success) {
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
    setLoading(false);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0F172A]' : 'bg-[#F9FAFB]'
    }`}>
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-linear-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <h2 className={`text-3xl font-bold ${
            theme === 'dark' ? 'text-[#F9FAFB]' : 'text-[#111827]'
          }`}>
            Welcome back
          </h2>
          <p className={`mt-2 ${
            theme === 'dark' ? 'text-[#F9FAFB]/60' : 'text-[#111827]/60'
          }`}>
            Sign in to your Startup Buddy account
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${
                theme === 'dark' ? 'text-[#F9FAFB]/80' : 'text-[#111827]/80'
              }`}>
                Email address
              </label>
              <div className="mt-1 relative">
                <Mail className={`absolute left-3 top-3 h-5 w-5 ${
                  theme === 'dark' ? 'text-[#F9FAFB]/40' : 'text-[#111827]/40'
                }`} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`pl-10 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                    theme === 'dark'
                      ? 'bg-[#111827] border-[#1F2937] text-[#F9FAFB] placeholder-[#F9FAFB]/40'
                      : 'bg-white border-[#E5E7EB] text-[#111827] placeholder-[#111827]/40'
                  }`}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className={`block text-sm font-medium ${
                theme === 'dark' ? 'text-[#F9FAFB]/80' : 'text-[#111827]/80'
              }`}>
                Password
              </label>
              <div className="mt-1 relative">
                <Lock className={`absolute left-3 top-3 h-5 w-5 ${
                  theme === 'dark' ? 'text-[#F9FAFB]/40' : 'text-[#111827]/40'
                }`} />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`pl-10 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                    theme === 'dark'
                      ? 'bg-[#111827] border-[#1F2937] text-[#F9FAFB] placeholder-[#F9FAFB]/40'
                      : 'bg-white border-[#E5E7EB] text-[#111827] placeholder-[#111827]/40'
                  }`}
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>

          {error && (
            <div className={`rounded-md p-3 ${
              theme === 'dark'
                ? 'bg-[#EF4444]/10 border border-[#EF4444]/20'
                : 'bg-[#FEE2E2] border border-[#EF4444]/20'
            }`}>
              <p className="text-[#EF4444] text-sm">{error}</p>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  Sign in
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>

          <div className={`mt-6 text-center text-xs ${
            theme === 'dark' ? 'text-[#F9FAFB]/50' : 'text-[#111827]/50'
          }`}>
            <p>Demo credentials: any email/password combination will work</p>
          </div>
        </form>
      </div>
    </div>
  );
}
