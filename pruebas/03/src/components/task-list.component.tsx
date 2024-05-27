import { useState } from 'react';
import Task from './task.component';

interface Task {
    id: number;
    name: string;
    isDeleted?: boolean; // New property to track if the task is deleted
}

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, name: "Task 1" },
        { id: 2, name: "Task 2" },
        { id: 3, name: "Task 3" }
    ]);

    // Function to mark a task as deleted
    const markTaskAsDeleted = (taskIndex: number) => {
        setTasks(prevTasks => prevTasks.map((task, index) =>
            index === taskIndex ? { ...task, isDeleted: true } : task
        ));
    };

    return (
        <div className="space-y-4">
            {tasks.map((task, index) => (
                <Task
                    key={task.id}
                    initialName={task.name}
                    onDelete={() => markTaskAsDeleted(index)}
                    // Pass isDeleted state to Task component
                    isDeleted={!!task.isDeleted} // Convert undefined to false for type safety
                />
            ))}
        </div>
    );
}

export default TaskList;
