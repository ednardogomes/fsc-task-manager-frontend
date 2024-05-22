import { useState, useEffect, useRef } from "react";
import axios from "axios";

import "./App.css";
import TaskItem from "./components/TaskItem";

const App = () => {
  // const mounted = useRef(false);

  // useEffect(() => {
  //   if (mounted.current === false) {
  //     mounted.current = true;
  //   } else {
  //     console.log("component was updated");
  //   }
  // });

  const [tasks, setTasks] = useState([
    {
      id: "1",
      description: "Estudar Programação",
      isCompleted: false,
    },

    {
      id: "2",
      description: "Ler",
      isCompleted: true,
    },
  ]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/tasks");
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCleanTasks = () => {
    setTasks([]);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      <button onClick={handleCleanTasks}>Limpar tarefas</button>
    </>
  );
};

// AGORA VOU MOSTRAR ABAIXO UMA FORMA MAIS ANTIGA QUE ESTÁ PARANDO DE SER USADA

// import React from "react";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleStateChange = this.handleStateChange.bind(this);
//     this.state = {
//       tasks: [
//         {
//           id: "1",
//           description: "Estudar Programação",
//           isCompleted: false,
//         },

//         {
//           id: "2",
//           description: "Ler",
//           isCompleted: true,
//         },
//       ],
//     };
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log(prevState);
//     console.log("componente was updated");
//   }

//   handleStateChange() {
//     this.setState({
//       tasks: [],
//     });
//   }

//   render() {
//     return (
//       <>
//         {this.state.tasks.map((task) => (
//           <TaskItem key={task.id} task={task} />
//         ))}
//         <button onClick={this.handleStateChange}>Limpar Tarefas</button>
//       </>
//     );
//   }
// }

export default App;
