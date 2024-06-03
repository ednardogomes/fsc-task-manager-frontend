import { Routes, Route } from "react-router-dom";

import Home from "./assets/Pages/Home";
import Login from "./assets/Pages/Login";


import "./App.scss";

const App = () => {
  // const mounted = useRef(false);

  // useEffect(() => {
  //   if (mounted.current === false) {
  //     mounted.current = true;
  //   } else {
  //     console.log("component was updated");
  //   }
  // });

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
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
