// const TaskItem = ({ task }) => {
//   return (
//     <>
//       <h1>{task.description}</h1>
//       <p>{task.isCompleted ? "completa" : "Não completa"} </p>
//     </>
//   );
// };

// AGORA VOU MOSTRAR ABAIXO UMA FORMA MAIS ANTIGA QUE ESTÁ PARANDO DE SER USADA
import React from "react";
class TaskItem extends React.Component {
  render() {
    const { task } = this.props;

    return (
      <>
        <h1>{task.description}</h1>
        <p>{task.isCompleted ? "Completa" : "Não completa"}</p>
      </>
    );
  }
}

export default TaskItem;
