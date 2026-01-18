import Link from "next/link";
import { LayoutDashboard, Users, Settings, Home } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden md:block">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600">Vistra Dash</h1>
        </div>
        <nav className="mt-6 px-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-lg"
          >
            <LayoutDashboard size={20} />
            <span>Visão Geral</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg mt-1"
          >
            <Users size={20} />
            <span>Usuários</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg mt-1"
          >
            <Settings size={20} />
            <span>Configurações</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg mt-1 mt-10"
          >
            <Home size={20} />
            <span>Voltar ao Site</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Olá, Admin
            </span>
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              Receita Total
            </h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
              R$ 45.231,89
            </p>
            <span className="text-green-500 text-sm font-medium mt-2 block">
              +20.1% vs mês anterior
            </span>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              Novos Usuários
            </h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
              2,350
            </p>
            <span className="text-green-500 text-sm font-medium mt-2 block">
              +15.2% vs mês anterior
            </span>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              Projetos Ativos
            </h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
              12
            </p>
            <span className="text-blue-500 text-sm font-medium mt-2 block">
              Em andamento
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Atividades Recentes
            </h3>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Novo projeto <span className="font-bold">Landing Page Vistra</span> criado por{" "}
                    <span className="font-bold">Rafael</span>.
                  </p>
                  <span className="text-gray-400 text-xs ml-auto">2h atrás</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
