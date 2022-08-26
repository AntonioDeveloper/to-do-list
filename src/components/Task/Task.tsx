import styles from './index.module.css';
import { MouseEvent } from 'react';
import checkMark from '../../assets/check.png';
import trashBin from '../../assets/check.png';

interface Task {
  isComplete: boolean;
  task: string;
}

interface LineTasks {
  tarefas: Task[];
  status: (event: MouseEvent<HTMLButtonElement>) => void;
}


export function Task({ tarefas, status }: LineTasks) {

  return (
    <>
      {tarefas.map((tarefa, i) => {
        return (
          <div key={i} className={`${styles.taskLine}`}>
            <button className={styles.checkMark} onClick={status} id={i.toString()}>
              {
                tarefa.isComplete == true ?
                  <img src={checkMark} /> : <img src="" />
              }
            </button>
            <div className={styles.taskDescription}>{tarefa.task}</div>
          </div>
        )
      })}
    </>
  )
}