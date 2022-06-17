import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const Create = (props) => {
    const { todos, setTodos } = props;

    const SubmitHandler = (e) => {
        e.preventDefault();
        let item = e.target[0].value;
        if (!item.trim() || item.length < 4)
            return alert(
                "Item field must not be empty & have atleast 4 characters"
            );
        let todo = { _id: nanoid(), item };
        const newtodos = [...todos, todo];
        setTodos(newtodos);
        localStorage.setItem("todos", JSON.stringify(newtodos));
        e.target[0].value = "";
    };
    return (
        <form onSubmit={SubmitHandler} className="row">
            <div className="col-md-4"></div>
            <input
                name="item"
                placeholder="Item Name"
                className="form-control w-25 me-2 col-md-5"
                type="text"
            />
            <button className="btn btn-primary col-md-1">Submit</button>
        </form>
    );
};

Create.propTypes = {
    todos: PropTypes.array,
    setTodos: PropTypes.func,
    about: PropTypes.string,
};

Create.defaultProps = {
    id: "jkn78",
};

export default Create;
