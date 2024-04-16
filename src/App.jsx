import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import Doing from "./components/Doing";
import "./App.css";
function App() {
  return (
    <>
      <div className="body">
        <Navbar></Navbar>
        <Todo></Todo>
        <Doing></Doing>
      </div>
    </>
  );
}

export default App;
