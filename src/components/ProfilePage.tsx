import { useState, useEffect } from 'react';
import { User, Mail, Shield, ExternalLink, Box, Settings, LogOut } from 'lucide-react';
import { motion } from 'motion/react';

interface ProfilePageProps {
  logout: () => void;
}

export default function ProfilePage({ logout }: ProfilePageProps) {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const response = await fetch('/api/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Ошибка загрузки профиля');
        setUser(data.user);
      } catch (err: any) {
        setError(err.message);
        if (err.message.includes('token')) {
          logout();
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [logout]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1 space-y-6"
        >
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center">
            <div className="w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full mx-auto flex items-center justify-center mb-4">
              <User size={48} />
            </div>
            <h2 className="text-xl font-bold text-gray-900">{user?.email.split('@')[0]}</h2>
            <p className="text-sm text-gray-500 mb-6 font-medium">Участник платформы</p>
            <div className="flex flex-col gap-2">
              <button className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-gray-50 text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                <Settings size={18} />
                Настройки
              </button>
              <button 
                onClick={logout}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-colors"
              >
                <LogOut size={18} />
                Выйти
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Shield size={18} className="text-indigo-600" />
              Статус верификации
            </h3>
            <div className="flex items-center gap-2 text-sm text-emerald-600 font-bold bg-emerald-50 p-3 rounded-xl border border-emerald-100">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              Активен
            </div>
          </div>
        </motion.div>

        {/* Dashboard Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 space-y-8"
        >
          {error && <p className="text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">{error}</p>}
          
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Ваша активность</h2>
              <button className="text-indigo-600 font-bold text-sm hover:underline flex items-center gap-1">
                Все задачи <ExternalLink size={14} />
              </button>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-indigo-100 transition-colors cursor-default group">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Box size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Созданные задачи</h3>
                <p className="text-3xl font-black text-indigo-600">0</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-indigo-100 transition-colors cursor-default group">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Полученные предложения</h3>
                <p className="text-3xl font-black text-indigo-600">0</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Информация об аккаунте</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
                <span className="text-gray-500 font-medium text-sm lowercase tracking-wider">Email Адрес</span>
                <span className="text-gray-900 font-bold">{user?.email}</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
                <span className="text-gray-500 font-medium text-sm lowercase tracking-wider">Дата регистрации</span>
                <span className="text-gray-900 font-bold">20 апреля 2026</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
                <span className="text-gray-500 font-medium text-sm lowercase tracking-wider">Тип аккаунта</span>
                <span className="text-indigo-600 font-bold px-3 py-1 bg-indigo-50 rounded-lg text-xs uppercase tracking-tighter">Корпоративный</span>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
