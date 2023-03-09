import { FaTrash } from 'react-icons/fa'

const Content = ({ tasks, handleDelete, handleCheck }) => {
  return (
    <main>
      <ul>
        {tasks.map((task) => 
          <li 
            key={task.id}>
              <input
                type='checkbox'
                onChange={() => handleCheck(task.id)}
                checked={task.isDone}
              />
              <label
                style={(task.isDone) ? { textDecoration: 'line-through' } : null}
              >
                {task.task}
              </label>
            <button onClick={() => handleDelete(task.id)}>
              <FaTrash />
            </button>
          </li>
        )}
      </ul>
    </main>
  )
}

export default Content
