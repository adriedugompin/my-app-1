import react from "react";
import { TaskList } from "./components/TaskList"

const tasksExample = [
    { id: 1, label: "uno", completed: false },
    { id: 2, label: "dos", completed: false },
    { id: 3, label: "tres", completed: false },

]

export function App() {
    return (<TaskList tasks={tasksExample} />);
}