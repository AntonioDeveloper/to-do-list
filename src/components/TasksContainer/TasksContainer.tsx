import styles from './index.module.css';
import imgClipBoard from '../../assets/Clipboard.svg';

export function TasksContainer() {
  return (
    <section>
      <div className={styles.tasksContainer}>
        <div className={styles.statusBar}>
          <p className={styles.createdTasks}>Tarefas Criadas <span>0</span></p>
          <p className={styles.concludedTasks}>Concluídas <span>0</span></p>
        </div>
        <div className={styles.tasks}>
          <img src={imgClipBoard} alt="ClipBoard" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong> <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      </div>
    </section>
  )
}