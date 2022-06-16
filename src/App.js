import { useState } from "react";

const App = () => {
    // const [form, setForm] = useState({
    //     username: "a",
    //     password: "",
    // });
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const ChangeHandler = (e) => {
    //     const { value, name } = e.target;
    //     setForm({ ...form, [name]: value });
    // };

    const SubmitHandler = (e) => {
        e.preventDefault();
        let newUser = { username, password };
        console.log(newUser);
    };

    return (
        <div className="container mt-5 alert alert-dark">
            <form onSubmit={SubmitHandler}>
                <input
                    name="username"
                    placeholder="Username"
                    className="form-control w-25 mb-3"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <input
                    name="password"
                    placeholder="Password"
                    className="form-control w-25 mb-3"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button className="btn btn-primary w-25">Submit</button>
            </form>
        </div>
    );
};

export default App;
