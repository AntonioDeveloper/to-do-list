import './global.css';
import { Header } from './components/Header/Header';
import { AddTaskBar } from './components/AddTaskBar/AddTaskBar';
import { TasksContainer } from './components/TasksContainer/TasksContainer';

export function App() {
  return (
    <>
      <Header />
      <TasksContainer />
    </>
  )
}

