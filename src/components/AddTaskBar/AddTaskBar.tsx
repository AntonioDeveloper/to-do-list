import styles from './index.module.css'

export function AddTaskBar() {
  const submitButton = document.querySelector("button[type=submit]");
  const inputTask = document.querySelector("input[name=nova-tarefa]") as HTMLInputElement | null;

  function handleNewTask() {
    event?.preventDefault();
    console.log(inputTask?.value);
  }

  return (
    <>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          name="nova-tarefa"
          className={styles.input} />
        <button type="submit" onClick={handleNewTask}>Criar</button>
      </form>
    </>
  )
}