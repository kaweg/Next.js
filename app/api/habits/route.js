import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'habits.json');

function readHabits() {
  if (!fs.existsSync(dataFilePath)) {
    const initialData = [
      { id: '1', name: 'Estudar Next.js', category: 'Estudos', completedDays: [] },
      { id: '2', name: 'Beber 2L de água', category: 'Saúde', completedDays: [] },
    ];
    dirCheck();
    fs.writeFileSync(dataFilePath, JSON.stringify(initialData, null, 2));
    return initialData;
  }
  
  const fileData = fs.readFileSync(dataFilePath, 'utf-8');
  if (!fileData || !fileData.trim()) {
    const defaultData = [];
    fs.writeFileSync(dataFilePath, JSON.stringify(defaultData, null, 2));
    return defaultData;
  }
  
  try {
    return JSON.parse(fileData);
  } catch (e) {
    return [];
  }
}

function dirCheck() {
  const dir = path.dirname(dataFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function writeHabits(habits) {
  dirCheck();
  fs.writeFileSync(dataFilePath, JSON.stringify(habits, null, 2));
}


export async function GET() {
  const habits = readHabits();
  return NextResponse.json(habits);
}


export async function POST(request) {
  try {
    const body = await request.json();
    const habits = readHabits();

    const newHabit = {
      id: Date.now().toString(),
      name: body.name,
      category: body.category || 'Geral',
      completedDays: [],
    };

    habits.push(newHabit);
    writeHabits(habits);

    return NextResponse.json(newHabit, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar hábito' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, dateStr } = body;
    const habits = readHabits();

    const updatedHabits = habits.map(habit => {
      if (habit.id === id) {
        const completedDays = habit.completedDays || [];
        const exists = completedDays.includes(dateStr);
        const newDays = exists
          ? completedDays.filter(d => d !== dateStr)
          : [...completedDays, dateStr];
        return { ...habit, completedDays: newDays };
      }
      return habit;
    });

    writeHabits(updatedHabits);
    return NextResponse.json(updatedHabits);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao atualizar hábito' }, { status: 500 });
  }
}


export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    let habits = readHabits();
    habits = habits.filter(habit => habit.id !== id);
    
    writeHabits(habits);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao deletar hábito' }, { status: 500 });
  }
}