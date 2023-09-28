import { Trash } from '@phosphor-icons/react'
import styles from './TaskItem.module.css'
import { ComponentProps } from 'react'
interface TaskItemProps extends ComponentProps<"li"> {
  title: string
  id: string
}

export  function TaskItem({title, id, ...props} :TaskItemProps) {
  return (
       <li {...props} className={styles.task}>
          <input type="checkbox" id={id} />
          <label htmlFor={id} className={styles.taskCheckbox}></label>
          <p>{title}</p>
          <button>
            <Trash size={14}/>
          </button>
        </li>
  )
}
