import { PlusCircle } from '@phosphor-icons/react'
import { Button } from './Button'
import { ChangeEvent } from 'react';
import styles from './TaskMenu1.module.css'
interface TaskMenuProps  {
newTask: string;
handleNewTaskChange:  (e: ChangeEvent<HTMLInputElement>)=> void
handleCreateTask: () => void
}

export  function TaskMenu({newTask,handleNewTaskChange,handleCreateTask}:TaskMenuProps) {
  const isNewTaskEmpty = newTask.length === 0

  return (
    <div className={styles.taskMenu}>
          <div className={styles.inputWrapper}>
            <input type="text"  className={styles.input} placeholder='Adicione uma nova tarefa' value={newTask} onChange={(e) => handleNewTaskChange(e)} />
          </div>
          <Button title="criar" onClick={handleCreateTask} disabled={isNewTaskEmpty}>
            <PlusCircle size={16}/>
          </Button>
        </div>
  )
}
