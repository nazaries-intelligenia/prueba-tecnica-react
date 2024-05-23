import { useState } from "react";
import { TaskModel } from "../models/task.model";
import { Task } from "./task.component";

export const TaskList = () => {
  const [ tasks, setTasks ] = useState<TaskModel[]>([
    { id: 1, name: "Task 1" },
    { id: 2, name: "Task 2" },
    { id: 3, name: "Task 3" }
  ]);

  const deleteTask = (taskId: number) => {
      setTasks(prevTasks => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
      <div className={"space-y-4"}>
          {tasks.map((task, _) => {
            return (
              <Task
                  key={task.id}
                  initialName={task.name}
                  onDelete={() => deleteTask(task.id)}
              />
            )
          })}
      </div>
  );
}
