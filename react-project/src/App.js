//import logo from './logo.svg';
import './App.css';
import Task from './components/tasks';
import { useState } from 'react';
import Header from './components/header';

const App = () => {
  const [tasks, setTasks] = useState([
    {id: 1, text: 'Doctor appointment', date: 'Nov 28th, 10:am'},
    {id: 2, text: 'Meet with my tutors', date: 'Dec 1st, 12:00pm'},
    {id: 3, text: 'Go see a movie at the cinema', date: 'Dec 2nd, 02:00pm'} ,
  ]);
  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return(
    <div className = 'App'>
    
      <Header />
      {tasks.map((task) => (
        <>
        {task.length > 0 ? (
          <div className="carry-out">
            <div>
            
              <h2>{task.text}</h2>
              <p>{task.date}</p>
            </div>
            <i class="fa-solid fa-xmark" onClick={() => deleteTask(task.id)}></i>
          </div>
          
        

        ) :
          <p>There is no task to perform</p>
        }
        </>
      ))}
    </div>
  );
};
export default App;





  











/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;**/

