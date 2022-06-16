const App = () => {
    const SubmitHandler = (e) => {
        e.preventDefault();
        let [username, password] = e.target;
        let newUser = { username: username.value, password: password.value };
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
                />
                <input
                    name="password"
                    placeholder="Password"
                    className="form-control w-25 mb-3"
                    type="password"
                />
                <button className="btn btn-primary w-25">Submit</button>
            </form>
        </div>
    );
};

export default App;
