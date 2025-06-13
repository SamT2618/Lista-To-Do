import { create } from 'zustand';

export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (task) => set((state) => ({ todos: [...state.todos, task] })),
  deleteTodo: (indexToDelete) =>
    set((state) => ({ todos: state.todos.filter((_, i) => i !== indexToDelete) })),
}));
