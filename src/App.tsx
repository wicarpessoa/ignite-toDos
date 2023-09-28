import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { TaskItem } from './components/TaskItem'
import { ChangeEvent, useState } from 'react'
import { v4 as uuidv4} from 'uuid'
import { TaskMenu } from './components/TaskMenu'

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

  function handleToggleTaskAsCompleted(id: string) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  function handleRemoveTask(taskId:string) {
    const tasksFiltered = tasks.filter(task=> {
      return taskId !== task.id
    })

    setTasks(tasksFiltered)
  }

  const tasksCompletedCounter = tasks.reduce((accumulator,task) => {
    return task.isCompleted ? (accumulator + 1 ): accumulator
  }, 0)

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <TaskMenu handleNewTaskChange={handleNewTaskChange} handleCreateTask={handleCreateTask} newTask={newTask}/>
        <div className={styles.tagsWrapper}>
          <div><span className={styles.tasksCount}>Tarefas criadas</span><span className={styles.tasksCountNumber}>{tasks.length}</span></div>
          <div><span className={styles.doneTasksCount}>Concluídas</span><span className={styles.doneTasksCountNumber} >{tasks.length === 0 ? (tasks.length):(`${tasksCompletedCounter} de ${tasks.length}`)}</span></div>
        </div>
      {tasks && <ul className={styles.taskContainer}>
        {tasks.map(task=> {
          return (
            <TaskItem key={task.id} id={task.id} title={task.title} isChecked={task.isCompleted} onChange={() => handleToggleTaskAsCompleted(task.id)} onHandleRemove={()=> handleRemoveTask(task.id)}/>
          )
        })}
      </ul>}
      </div>
    </div>
    )
}

