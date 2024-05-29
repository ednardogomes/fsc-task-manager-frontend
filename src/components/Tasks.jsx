import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

import "./Tasks.scss";

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const alert = useAlert();

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/tasks");
      setTasks(data);
    } catch (_e) {
      alert.error("Não foi possivel recuperar as tarefas.");
    }
  };

  const lastTasks = useMemo(() => {
    return tasks.filter((task) => task.isCompleted === false);
  }, [tasks]);

  const completedTasks = useMemo(() => {
    return tasks.filter((task) => task.isCompleted);
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="tasks-container">
      <h2>Minhas tarefas</h2>

      <div className="last-tasks">
        <h3>Ultimas Tarefas</h3>
        <AddTask fetchTasks={fetchTasks} />
        <div className="tasks-list">
          {lastTasks.map((lastTask) => (
            <TaskItem
              task={lastTask}
              fetchTasks={fetchTasks}
              key={lastTask._id}
            />
          ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas Concluídas</h3>
        <div className="tasks-list">
          {completedTasks.map((completedTask) => (
            <TaskItem
              task={completedTask}
              fetchTasks={fetchTasks}
              key={completedTask._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
