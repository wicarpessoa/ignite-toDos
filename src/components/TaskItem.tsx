import { Trash } from '@phosphor-icons/react'
import styles from './TaskItem.module.css'
import { ComponentProps } from 'react'
interface TaskItemProps extends ComponentProps<"li"> {
  title: string
  id: string
  isChecked?: boolean
  onChange: () => void
  onHandleRemove: ()=> void
}

export  function TaskItem({title,isChecked,onChange, id, onHandleRemove, ...props} :TaskItemProps) {
  return (
       <li {...props} className={`${styles.task} ${isChecked ? styles.checked : styles.notChecked}`}>
          <input type="checkbox" id={id} checked={isChecked} onChange={onChange}  />
          <label htmlFor={id} className={styles.taskCheckbox}></label>
          <p>{title}</p>
          <button onClick={onHandleRemove}>
            <Trash size={14}/>
          </button>
        </li>
  )
}
