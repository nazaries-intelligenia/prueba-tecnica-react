import { useEffect, useState} from 'react'
import './App.css'

function Task({ initialName, onDelete }: { initialName: string; onDelete: () => void }) {
    const [ name, setName ] = useState(initialName);
    const [ isLoading, setIsLoading ] = useState(false);

    // Simular una solicitud de red para cambiar el nombre de la tarea después de 2 segundos
    useEffect(() => {
        setIsLoading(true);
        const timeoutId = setTimeout(() => {
            setName(`${initialName} changed`);
            setIsLoading(false)
        }, 5000);


        return () => clearTimeout(timeoutId)

    }, []);

    return (
        <div
            className="p-4 flex justify-between space-x-4 items-center bg-gray-800 border-2 border-gray-700 rounded-lg shadow-lg">
                <span className={isLoading ? 'italic text-gray-400' : 'text-gray-200'}>
                    {name}
                </span>
            <div className="flex items-center space-x-4">
                <button
                    onClick={onDelete}
                    className="inline-flex items-center justify-center px-3 py-1 border-2 border-transparent shadow-sm text-sm font-medium rounded-md text-gray-800 bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    Delete
                </button>
                {isLoading && (
                    <p className="mt-2 text-sm text-gray-400">Fetching from server...</p>
                )}
            </div>
        </div>
    );
}

interface Task {
    id: number;
    name: string;
}

function TaskList() {
    const [ tasks, setTasks ] = useState<Task[]>([ { id: 1, name: "Task 1" }, { id: 2, name: "Task 2" }, {
        id: 3,
        name: "Task 3"
    } ]);

    const deleteTask = (taskIndex: number) => {
        setTasks(tasks.filter((_, index) => index !== taskIndex));
    };

    return (
        <div className={"space-y-4"}>
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    initialName={task.name}
                    onDelete={() => deleteTask(index)}
                />
            ))}
        </div>
    );
}


function App() {
    return (
        <TaskList/>
    );
}

export default App
