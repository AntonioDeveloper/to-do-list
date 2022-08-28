import styles from './index.module.css';
import imgClipBoard from '../../assets/Clipboard.svg';
import { AddTaskBar } from '../AddTaskBar/AddTaskBar';
import { useState, useEffect, MouseEvent, ChangeEvent } from 'react';
import { Task } from '../Task/Task';

export function TasksContainer() {

  const [inputValue, setInputValue] = useState("");
  //const [isComplete, setIsComplete] = useState(false);
  const [choosenTask, setChoosenTask] = useState(0);
  const [arrayExists, setArrayExists] = useState(false);
  const [tasksArray, setTaskArray] = useState<Array<{
    isComplete: boolean,
    task: string
  }>>([]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
  }

  function handleNewTask(event: MouseEvent<HTMLButtonElement>) {

    event?.preventDefault();

    const task = inputValue;

    //tasksArray.push({ isComplete, task });
    setTaskArray((state) => [...state, { isComplete: false, task: task }]);
    setArrayExists(true);

    //console.log(tasksArray);
    return tasksArray;
  }

  let el: HTMLElement;
  let idEl: number;

  function handleTaskStatus(event: MouseEvent<HTMLButtonElement>) {
    event?.preventDefault();

    el = event?.target as HTMLElement;
    idEl = Number(el.id);

    setChoosenTask(idEl);
    tasksArray[idEl].isComplete = !tasksArray[idEl].isComplete;
    // console.log(idEl)
    console.log(tasksArray[idEl])
    let changeStatus = tasksArray[idEl].isComplete;
    if (changeStatus) {
      console.log("clicado")
    } else {
      console.log("não clicado");
    }

    return changeStatus
  }

  function deleteTask(event: MouseEvent<HTMLButtonElement>) {

    let trash = event?.target as HTMLElement;
    let idTrash = Number(trash.id);
    const selectedTask = JSON.stringify(tasksArray[idTrash]);
    console.log(tasksArray);

    console.log(`Deletando ${selectedTask}`);

    const updatedTaskArray = tasksArray.filter(task => {
      return JSON.stringify(task) !== selectedTask;
    })
    console.log("Novo array", updatedTaskArray);
    setTaskArray(updatedTaskArray);
  }

  return (
    <section>
      <AddTaskBar TaskHandler={handleNewTask} InputChangeHandler={handleChange} InputValue={inputValue} />
      <div className={styles.tasksContainer}>
        <div className={styles.statusBar}>
          <p className={styles.createdTasks}>Tarefas Criadas <span>0</span></p>
          <p className={styles.concludedTasks}>Concluídas <span>0</span></p>
        </div>
        <div className={styles.tasks}>
          {arrayExists == false ? (

            <p>
              <img src={imgClipBoard} alt="ClipBoard" />
              <strong>Você ainda não tem tarefas cadastradas</strong> <br />
              Crie tarefas e organize seus itens a fazer
            </p>
          )
            : <Task tarefas={tasksArray} status={handleTaskStatus} deleteTask={deleteTask} />
          }
        </div>
      </div>
    </section>
  )
}