import React from "react";

const Show = (props) => {
    const { todos, setTodos } = props;

    const DeleteHandler = (id) => {
        const filterdTodos = todos.filter((todo) => todo._id !== id);
        setTodos(filterdTodos);
        localStorage.setItem("todos", JSON.stringify(filterdTodos));
    };

    let todoslist = (
        <p className="text-center text-danger">No todos present.</p>
    );

    if (todos.length > 0) {
        todoslist = todos.map((todo) => (
            <li
                key={todo._id}
                className="list-group-item d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{todo.item}</div>
                </div>
                <span
                    onClick={() => DeleteHandler(todo._id)}
                    role="button"
                    className="badge rounded-pill"
                >
                    ❌
                </span>
            </li>
        ));
    }

    return (
        <ol className="w-50 m-auto list-group list-group-numbered">
            {todoslist}
        </ol>
    );
};

export default Show;
