import styles from './index.module.css';

interface Task {
  isComplete: boolean;
  task: string;
}

interface LineTasks {
  tarefas: Task[];
}

export function Task({ tarefas }: LineTasks) {
  console.log(tarefas)
  return (
    <div className={styles.taskContainer}>
      {tarefas.map((tarefa, i) => {
        return (
          <div key={i}>
            <div className={styles.checkMark}>{tarefa.isComplete}</div>
            <div className={styles.taskDescription}>{tarefa.task}</div>
          </div>
        )
      })}
    </div>
  )
}