import React, { useState } from 'react';
import { useTodoStore } from './store';

function App() {
  const [task, setTask] = useState('');
  const [message, setMessage] = useState('');
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(''), 2000);
  };

  const handleAdd = () => {
    if (task.trim() === '') {
      showMessage('❌ No puedes agregar una tarea vacía');
      return;
    }
    addTodo(task);
    showMessage('✅ Tarea agregada');
    setTask('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📝 To-Do List</h1>

      {message && <div style={styles.popup}>{message}</div>}

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Escribe una nueva tarea..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.addButton}>
          ➕ Agregar
        </button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.listItem}>
            <span style={{ color: '#111' }}>{todo}</span>
            <button
              onClick={() => deleteTodo(index)}
              style={styles.deleteButton}
              title="Eliminar"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '500px',
    width: '100%',
    background: '#f9fafb',
    borderRadius: '1rem',
    boxShadow: '0 0 20px rgb(255, 162, 162)',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333',
    textAlign: 'center',
  },
  popup: {
    background: '#10b981',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    marginBottom: '1rem',
    fontSize: '0.95rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    animation: 'fadeInOut 2s',
    textAlign: 'center',
  },
  inputContainer: {
    display: 'flex',
    gap: '0.5rem',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  input: {
    flex: 1,
    padding: '0.6rem',
    fontSize: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid #ccc',
    minWidth: '250px',
  },
  addButton: {
  padding: '0.6rem 1.2rem',
  fontSize: '1rem',
  borderRadius: '0.5rem',
  backgroundColor: '#fecbb7',
  color: '#3333333',
  border: '2px solid #fecbb7',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 6px rgba(255, 162, 162)',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    marginTop: '1rem',
  },
  listItem: {
    background: '#fff',
    color: '#111',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    marginBottom: '0.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  deleteButton: {
    background: 'transparent',
    border: 'none',
    fontSize: '1.1rem',
    cursor: 'pointer',
    color: '#ef4444',
  },
};

export default App;
