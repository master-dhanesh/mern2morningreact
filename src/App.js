import { useState } from "react";
import Create from "./Components/Create";
import Show from "./Components/Show";

const App = () => {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );

    return (
        <div className="container mt-5">
            <Create
                todos={todos}
                setTodos={setTodos}
                about="This is for checking purpose"
            />
            <hr className="w-50 m-auto mt-3 mb-3" />
            <Show todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default App;
