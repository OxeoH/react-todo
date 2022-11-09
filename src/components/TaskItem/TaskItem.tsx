import React from 'react'

const TaskItem: React.FC = () => {
  return (
    <div className='task'>
        <div className='task__counter'>1</div>
        <div className="task__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nostrum optio ipsum vero perspiciatis minus</div>
        <input type="checkbox" className='task__checker'/>
        <div className="task__deleter">X</div>
    </div>
  )
}

export default TaskItem