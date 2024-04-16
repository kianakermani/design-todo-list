import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import "./App.css";
function App() {
  return (
    <>
      <div className="body">
        <Navbar></Navbar>
        <Todo></Todo>
      </div>
    </>
  );
}

export default App;
