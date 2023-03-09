import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react';

const AddTask = ({ newTask, setNewTask, handleSubmit }) => {
    const inputRef = useRef();

    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addTask">
                Add task:
            </label>
            <input 
                autoFocus
                ref={inputRef}
                required
                type="text"
                placeholder='Add Task'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Add Task'
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddTask;