'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, Check, Flame, Trophy, CheckCircle2 } from 'lucide-react';

export default function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [newHabitName, setNewHabitName] = useState('');
  const [newHabitCategory, setNewHabitCategory] = useState('Geral');
  const [currentTab, setCurrentTab] = useState('tracker');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/habits')
      .then((res) => res.json())
      .then((data) => {
        setHabits(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao buscar hábitos:', err);
        setLoading(false);
      });
  }, []);

  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return {
      dateStr: d.toISOString().split('T')[0],
      label: d.toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric' }).replace('.', ''),
    };
  });

  const addHabit = async (e) => {
    e.preventDefault();
    if (!newHabitName.trim()) return;

    const res = await fetch('/api/habits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newHabitName, category: newHabitCategory }),
    });

    if (res.ok) {
      const createdHabit = await res.json();
      setHabits([...habits, createdHabit]);
      setNewHabitName('');
    }
  };

  const toggleDay = async (id, dateStr) => {
    const res = await fetch('/api/habits', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, dateStr }),
    });

    if (res.ok) {
      const updatedList = await res.json();
      setHabits(updatedList);
    }
  };

  const deleteHabit = async (id) => {
    const res = await fetch(`/api/habits?id=${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      setHabits(habits.filter((h) => h.id !== id));
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <Flame className="text-orange-500" /> Habit Tracker JS
            </h1>
            <p className="text-slate-400 text-sm">Gerenciador de hábitos minimalista em Next.js (sem TypeScript).</p>
          </div>
          
          <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button 
              onClick={() => setCurrentTab('tracker')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${currentTab === 'tracker' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Matriz
            </button>
            <button 
              onClick={() => setCurrentTab('stats')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${currentTab === 'stats' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Estatísticas
            </button>
          </div>
        </header>

        <form onSubmit={addHabit} className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row gap-3">
          <input 
            type="text" 
            placeholder="Nome do hábito (ex: Ler 15 páginas)..." 
            value={newHabitName}
            onChange={(e) => setNewHabitName(e.target.value)}
            className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
          />
          <select
            value={newHabitCategory}
            onChange={(e) => setNewHabitCategory(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-indigo-500"
          >
            <option value="Geral">Geral</option>
            <option value="Estudos">Estudos</option>
            <option value="Saúde">Saúde</option>
            <option value="Trabalho">Trabalho</option>
          </select>
          <button 
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition"
          >
            <Plus size={18} /> Adicionar
          </button>
        </form>

        {loading ? (
          <div className="text-center py-12 text-slate-500">Carregando dados do servidor...</div>
        ) : currentTab === 'tracker' ? (
          <div className="bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase bg-slate-900/80">
                    <th className="p-4 font-semibold">Hábito</th>
                    {last7Days.map((day, idx) => (
                      <th key={idx} className="p-3 text-center font-medium whitespace-nowrap">
                        {day.label}
                      </th>
                    ))}
                    <th className="p-4 text-center font-semibold">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-sm">
                  {habits.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="p-8 text-center text-slate-500">
                        Nenhum hábito cadastrado ainda. 🚀
                      </td>
                    </tr>
                  ) : (
                    habits.map((habit) => (
                      <tr key={habit.id} className="hover:bg-slate-900/40 transition">
                        <td className="p-4 font-medium text-white">
                          <div>{habit.name}</div>
                          <span className="text-xs text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded-md border border-indigo-800/40">
                            {habit.category}
                          </span>
                        </td>
                        {last7Days.map((day, idx) => {
                          const isCompleted = habit.completedDays?.includes(day.dateStr);
                          return (
                            <td key={idx} className="p-3 text-center">
                              <button
                                onClick={() => toggleDay(habit.id, day.dateStr)}
                                className={`w-8 h-8 rounded-lg mx-auto flex items-center justify-center transition ${
                                  isCompleted 
                                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20' 
                                    : 'bg-slate-800/80 hover:bg-slate-700 text-slate-600'
                                }`}
                              >
                                {isCompleted && <Check size={16} strokeWidth={3} />}
                              </button>
                            </td>
                          );
                        })}
                        <td className="p-4 text-center">
                          <button 
                            onClick={() => deleteHabit(habit.id)}
                            className="text-slate-500 hover:text-rose-400 p-2 transition"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
              <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl text-indigo-400">
                <Trophy size={28} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Total de Hábitos</p>
                <h3 className="text-2xl font-bold text-white">{habits.length}</h3>
              </div>
            </div>
            
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400">
                <CheckCircle2 size={28} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Total de Conclusões Registradas</p>
                <h3 className="text-2xl font-bold text-white">
                  {habits.reduce((acc, h) => acc + (h.completedDays?.length || 0), 0)}
                </h3>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}