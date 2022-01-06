import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appt.',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Grocery Store',
        day: 'Feb 7th at 12:00pm',
        reminder: false
    }
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => {
      return task.id !== id;
    }));
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => {
      return (
        task.id === id ? {
          ...task, reminder: !task.reminder
        } : task);
    }));
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleReminder} /> 
        ) : ( 
        'No Tasks to show'
        )}
    </div>
  );
}

export default App;























// This is how you would use a class component rather than a function component 
// import React from 'react'; necessary for class components
// class App extends React.Component {
//   render() {
//     return (
//       <h1>This is a class!</h1>
//     );
//   }
// }

// export default App;