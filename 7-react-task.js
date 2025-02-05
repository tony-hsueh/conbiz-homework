import { useState } from 'react';

export default function TaskManager() {
  const [isPersonAlice, setIsPersonAlice] = useState(true);
  const [tasks, setTasks] = useState({Alice: 0, Bob: 0})
  return (
    <div>
      <TaskCounter 
        name={isPersonAlice ? "Alice": "Bob"} 
        tasks={tasks[isPersonAlice ? "Alice": "Bob"]}
        setTasks={setTasks}
      />

      <button onClick={() => {
        setIsPersonAlice(!isPersonAlice);
      }}>
        Switch Person
      </button>
    </div>
  );
}

function TaskCounter({ name, tasks, setTasks }) {
  return (
    <div>
      <h1>{name}'s tasks: {tasks}</h1>
      <button onClick={() => setTasks(prev=> ({
        ...prev,
        [name]: prev[name] + 1, 
      }))}>
      Complete Task
      </button>
    </div>
  );
}