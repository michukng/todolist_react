import './index.css'
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import AddTask from './AddTask';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasklist')) || [])
  const [newTask, setNewTask] = useState('');

  const addTask = (task) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const myNewTask = {
      id,
      isDone: false,
      task
    }
    const taskList = [...tasks, myNewTask]
    setTasks(taskList)
    localStorage.setItem('tasklist', JSON.stringify(taskList))
  }

  const handleCheck = (id) => {
    const taskList = tasks.map((task) => task.id === id ? {...task, isDone: !task.isDone } : task)
    setTasks(taskList);
    localStorage.setItem('tasklist', JSON.stringify(taskList))
  }

  const handleDelete = (id) => {
    const taskList = tasks.filter((task) => task.id !== id);
    setTasks(taskList);
    localStorage.setItem('tasklist', JSON.stringify(taskList))
  }

  const handleSubmit = (e) => {    
    e.preventDefault();
    if (!newTask) return;
    addTask(newTask);
    setNewTask('');
  }

  return (
    <div className='App'>
      <Header title="To Do List"/>
      <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
         />
      <Content
        tasks={tasks}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
      <Footer
        tasks={tasks}
      />
    </div>
  );
}

export default App;
