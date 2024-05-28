// import { useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { useAlert } from "react-alert";

import "./TaskItem.scss";

const TaskItem = ({ task, fetchTasks }) => {
  const alert = useAlert();
  const handleTaskDeletion = async () => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${task._id}`);
      await fetchTasks();
    } catch (error) {
      alert.error("Algo deu errado.");
    }
  };

  const handleTaskCompletionChange = async (e) => {
    try {
      await axios.patch(`http://localhost:8000/tasks/${task._id}`, {
        isCompleted: e.target.checked,
      });

      await fetchTasks();

      alert.success("A tarefa foi movida com sucesso");
    } catch (error) {
      alert.error("Algo de errado.");
    }
  };
  // useEffect(() => {
  //   console.log("component was mounted!");

  //   return () => {
  //     console.log("i will unmount");
  //   };
  // }, []);
  return (
    <>
      <div className="task-item-container">
        <div className="task-description">
          <label
            className={
              task.isCompleted
                ? "checkbox-container-completed"
                : "checkbox-container"
            }
          >
            {task.description}
            <input
              type="checkbox"
              defaultChecked={task.isCompleted}
              onChange={(e) => handleTaskCompletionChange(e)}
            />
            <span
              className={task.isCompleted ? "checkmark completed" : "checkmark"}
            ></span>
          </label>
        </div>

        <div className="delete">
          <AiFillDelete
            size={18}
            color="#F97474"
            onClick={handleTaskDeletion}
          />
        </div>
      </div>
    </>
  );
};

// AGORA VOU MOSTRAR ABAIXO UMA FORMA MAIS ANTIGA QUE ESTÁ PARANDO DE SER USADA

// import React from "react";
// class TaskItem extends React.Component {
//   componentDidMount() {
//     console.log("component was mounted!");
//   }

//   componentWillUnmount() {
//     console.log("i will unmount ");
//   }

//   render() {
//     const { task } = this.props;

//     return (
//       <>
//         <h1>{task.description}</h1>
//         <p>{task.isCompleted ? "Completa" : "Não completa"}</p>
//       </>
//     );
//   }
// }

export default TaskItem;
