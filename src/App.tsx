import { PlusCircle  } from '@phosphor-icons/react'
import { Button } from './components/Button'
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { TaskItem } from './components/TaskItem'
import { ChangeEvent, useState } from 'react'
import { v4 as uuidv4} from 'uuid'

interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [ newTask, setNewTask ] = useState<string>('')

  function handleNewTaskChange(event:ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function handleCreateTask() {
    setTasks(prevState => [...prevState, {id:uuidv4(), title:newTask, isCompleted: false}])
    setNewTask("")
  }

  const isNewTaskEmpty = newTask.length === 0
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <div className={styles.taskMenu}>
          <div className={styles.inputWrapper}>
            <input type="text"  className={styles.input} placeholder='Adicione uma nova tarefa' value={newTask} onChange={handleNewTaskChange} />
          </div>
          <Button title="criar" onClick={handleCreateTask} disabled={isNewTaskEmpty}>
            <PlusCircle size={16}/>
          </Button>
        </div>
        <div className={styles.tagsWrapper}>
          <div><span className={styles.tasksCount}>Tarefas criadas</span><span className={styles.tasksCountNumber}>5</span></div>
          <div><span className={styles.doneTasksCount}>Concluídas</span><span className={styles.doneTasksCountNumber} >2 de 5</span></div>
        </div>
      <ul className={styles.taskContainer}>
        {tasks.map(task=> {
          return (
            <TaskItem key={task.id} id={task.id} title={task.title}/>

          )
        })}
      </ul>
      </div>
    </div>
    )
}

