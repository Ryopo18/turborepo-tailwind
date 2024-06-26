"use client";
import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import {
  Plus,
  Trash2,
  CheckCircle,
  Circle,
  Calendar,
  Clock,
  Search,
} from "lucide-react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  dueDate: string | null;
  createdAt: string;
}

type FilterType = "all" | "active" | "completed";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [showCompleted, setShowCompleted] = useState<boolean>(true);

  const addTodo = (): void => {
    if (newTodo.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo,
          completed: false,
          dueDate: dueDate || null,
          createdAt: new Date().toISOString(),
        },
      ]);
      setNewTodo("");
      setDueDate("");
    }
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && !todo.completed) ||
      (filter === "completed" && todo.completed);
    const matchesSearch = todo.text
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch && (showCompleted || !todo.completed);
  });

  const sortedTodos = filteredTodos.sort((a, b) => {
    if (a.dueDate && b.dueDate)
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    if (a.dueDate) return -1;
    if (b.dueDate) return 1;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        Todo Master
      </h1>
      <div className="mb-4">
        <div className="flex mb-2">
          <input
            type="text"
            className="flex-grow p-2 border-2 border-indigo-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="新しいタスクを入力..."
            value={newTodo}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNewTodo(e.target.value)
            }
            onKeyPress={(e: KeyboardEvent<HTMLInputElement>) =>
              e.key === "Enter" && addTodo()
            }
          />
          <input
            type="date"
            className="p-2 border-2 border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={dueDate}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDueDate(e.target.value)
            }
          />
          <button
            className="bg-indigo-500 text-white p-2 rounded-r-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            onClick={addTodo}
          >
            <Plus size={24} />
          </button>
        </div>
        <div className="flex items-center bg-gray-100 rounded-lg p-2">
          <Search size={20} className="text-gray-500 mr-2" />
          <input
            type="text"
            className="bg-transparent flex-grow focus:outline-none"
            placeholder="タスクを検索..."
            value={searchTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
          />
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          {(["all", "active", "completed"] as const).map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-3 py-1 rounded-full capitalize ${
                filter === filterType
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition duration-200`}
            >
              {filterType}
            </button>
          ))}
        </div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">完了したタスクを表示</span>
        </label>
      </div>
      <ul className="space-y-2">
        {sortedTodos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:shadow-md transition duration-200"
          >
            <div className="flex items-center flex-grow mr-4">
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`mr-3 focus:outline-none ${
                  todo.completed
                    ? "text-green-500 hover:text-green-600"
                    : "text-gray-400 hover:text-gray-500"
                } transition-colors duration-200`}
              >
                {todo.completed ? (
                  <CheckCircle size={24} />
                ) : (
                  <Circle size={24} />
                )}
              </button>
              <span
                className={`${
                  todo.completed
                    ? "line-through text-gray-500"
                    : "text-gray-800"
                } break-all`}
              >
                {todo.text}
              </span>
            </div>
            <div className="flex items-center">
              {todo.dueDate && (
                <span className="text-sm text-gray-500 mr-2 flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {new Date(todo.dueDate).toLocaleDateString()}
                </span>
              )}
              <span className="text-sm text-gray-500 mr-2 flex items-center">
                <Clock size={16} className="mr-1" />
                {new Date(todo.createdAt).toLocaleString()}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 focus:outline-none transition duration-200"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {sortedTodos.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          タスクがありません。新しいタスクを追加しましょう！
        </p>
      )}
    </div>
  );
};

export default TodoApp;
