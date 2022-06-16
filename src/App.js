import { useState } from "react";

const App = () => {
    const [form, setForm] = useState({
        username: "a",
        password: "",
    });

    const ChangeHandler = (e) => {
        const { value, name } = e.target;
        setForm({ ...form, [name]: value });
    };
    return (
        <div className="container mt-5 alert alert-dark">
            <form>
                <input
                    name="username"
                    placeholder="Username"
                    className="form-control w-25 mb-3"
                    type="text"
                    onChange={ChangeHandler}
                    value={form.username}
                />
                <input
                    name="password"
                    placeholder="Password"
                    className="form-control w-25 mb-3"
                    type="password"
                    onChange={ChangeHandler}
                    value={form.password}
                />
                <button className="btn btn-primary w-25">Submit</button>
            </form>
        </div>
    );
};

export default App;
