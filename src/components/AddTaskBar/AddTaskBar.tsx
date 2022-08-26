import styles from './index.module.css'
import { ChangeEvent, useState, useEffect, MouseEvent } from 'react';

interface Tasks {
  isComplete: boolean;
  task: string;
}

interface AddTaskBarProps {
  TaskHandler: (event: MouseEvent<HTMLButtonElement>) => Tasks[];
  InputChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  InputValue: string;
}

export function AddTaskBar({ TaskHandler, InputChangeHandler, InputValue }: AddTaskBarProps) {

  return (
    <>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          name="nova-tarefa"
          className={styles.input}
          value={InputValue}
          onChange={InputChangeHandler}
        />
        <button type="submit" onClick={TaskHandler} className={`${styles.createTask}`}>Criar</button>
      </form>
    </>
  )
}

