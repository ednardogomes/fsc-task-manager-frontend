import { useEffect } from "react";

const TaskItem = ({ task }) => {
  useEffect(() => {
    console.log("component was mounted!");

    return () => {
      console.log("i will unmount");
    };
  }, []);
  return (
    <>
      <h1>{task.description}</h1>
      <p>{task.isCompleted ? "completa" : "Não completa"} </p>
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
