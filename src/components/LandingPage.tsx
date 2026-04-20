import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Rocket, Users, Briefcase, Info, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 to-purple-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-6">
                <Rocket size={14} />
                <span>MVP концепция платформы</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                Соединяем задачи <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">крупного бизнеса</span> с решениями социального.
              </h1>
              <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
                Единое пространство, где корпорации публикуют реальные социальные задачи, а социальные предприниматели и специалисты предлагают конкретные решения с понятными сроками и бюджетом.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/register" 
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-500/25 transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  Создать задачу
                </Link>
                <Link 
                  to="/register" 
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-200 text-base font-semibold rounded-xl text-gray-900 bg-white hover:bg-gray-50 transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  Предложить решение
                </Link>
              </div>
            </motion.div>

            <motion.aside 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-2xl relative"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-100/50 rounded-full blur-2xl -z-10"></div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ClipboardList className="text-indigo-600" size={24} />
                Сейчас на платформе
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "Закупка сувенирной продукции", counts: "12 откликов" },
                  { title: "Проведение мероприятия с инклюзией", counts: "8 откликов" },
                  { title: "Организация социального маркета", counts: "15 откликов" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-indigo-50/50 transition-colors cursor-default border border-transparent hover:border-indigo-100">
                    <span className="font-semibold text-gray-800">{item.title}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">{item.counts}</span>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-3 block">Процесс</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Простой процесс в 3 шага</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Прозрачный workflow помогает быстро находить исполнителей и отбирать сильные идеи без лишней бюрократии.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: <Briefcase size={32} />, title: "1. Бизнес публикует задачу", desc: "Компания описывает цель, ограничения, бюджет и дедлайн. Всё структурировано в одной карточке." },
              { icon: <Users size={32} />, title: "2. Социальный бизнес предлагает решения", desc: "Подрядчики, эксперты и команды отправляют свои подходы с оценкой сроков, стоимости и ценности." },
              { icon: <CheckCircle size={32} />, title: "3. Бизнес выбирает лучшее", desc: "Заказчик сравнивает отклики, общается с исполнителями и утверждает финальное решение." }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Participants */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-3 block">Участники</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Уже с нами</h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              Крупный бизнес
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Сбер", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Sberbank_Logo_2020.svg" },
                { name: "Авито", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Avito_logo.svg" },
                { name: "Яндекс", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" }, // Placeholder for Yandex
                { name: "Магнит", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" } // Placeholder
              ].map((c, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                  <span className="font-bold text-gray-400">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Социальные проекты</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Иммерсивный театр народов России", desc: "«Калык шынык»" },
                { title: "ИП Иванов И.И", desc: "Вязанные изделия ручной работы" },
                { title: "Музей «В тишине»", desc: "Инклюзивные экскурсии" }
              ].map((p, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-4 font-bold">
                    {p.title.charAt(0)}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{p.title}</h4>
                  <p className="text-sm text-gray-500">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-indigo-600 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-600/30"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
              Готовы начать работу с платформой?
            </h2>
            <p className="text-lg text-indigo-100 mb-10 max-w-xl mx-auto">
              Оставьте заявку на ранний доступ или зарегистрируйтесь прямо сейчас, чтобы увидеть доступные задачи.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register" className="bg-white text-indigo-600 px-8 py-3.5 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg">
                Зарегистрироваться
              </Link>
              <Link to="/login" className="bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-indigo-800 border border-indigo-500/50 transition-colors">
                Войти в кабинет
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">P</span>
            </div>
            <span className="font-bold text-gray-900">Platforma SP</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 Platforma SP — Demo Landing Page (MVP)</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors text-sm font-medium">Политика</a>
            <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors text-sm font-medium">Telegram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
