// import { Button } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ListsOfTasks from "./components/ListsOfTasks";
import AddATask from "./components/AddATask";

function App() {
  return (
    <div className="p-3 mt-4 d-flex justify-content-between gap-4 w-100">
      <AddATask />

      <ListsOfTasks />
    </div>
  );
}

export default App;
