import div from "./components/Layout";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";

//importing bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Tasks />
    </div>
  );
}

export default App;
