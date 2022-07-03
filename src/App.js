import './App.css';
import AddTodo from './Components/AddTodo';
// import Navbar from './Components/Navbar';
function App() {

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <h1 className='text-3xl font-bold'>To Do List</h1>
      <AddTodo></AddTodo>
    </div>
  );
}

export default App;
