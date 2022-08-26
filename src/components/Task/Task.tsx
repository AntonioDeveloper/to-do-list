import styles from './index.module.css';
import { MouseEvent } from 'react';

interface Task {
  isComplete: boolean;
  task: string;
}

interface LineTasks {
  tarefas: Task[];
  status: (event: MouseEvent<HTMLButtonElement>) => void;
}


export function Task({ tarefas, status }: LineTasks) {

  // const btnClicked = document.querySelectorAll(`.${styles.checkMark}`);

  // if (btnClicked) {
  //   btnClicked.forEach(btn => btn?.addEventListener("click", function () {
  //     let value = btn?.getAttribute("id");
  //     console.log(value);
  //   }))
  // }

  return (
    <>
      {tarefas.map((tarefa, i) => {
        return (
          <div key={i}>
            <button className={styles.checkMark} onClick={status} id={i.toString()}>{tarefa.isComplete} {i}</button>
            <div className={styles.taskDescription}>{tarefa.task}</div>
          </div>
        )
      })}
    </>
  )
}