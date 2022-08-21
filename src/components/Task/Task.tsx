import styles from './index.module.css';

export function Task() {
  return (
    <div className={styles.taskContainer}>
      <div className={styles.checkMark}></div>
      <div className={styles.taskDescription}></div>
    </div>
  )
}