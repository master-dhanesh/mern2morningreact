const App = () => {
    const SubmitHandler = (e) => {
        e.preventDefault();
        let [item] = e.target;
        let todo = { item: item.value };
        console.log(todo);
    };

    return (
        <div className="container mt-5">
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
            <hr className="w-50 m-auto mt-3 mb-3" />

            <ol className="w-50 m-auto list-group list-group-numbered">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
                        Hello World
                    </div>
                    <span role="button" className="badge rounded-pill">
                        ❌
                    </span>
                </li>
            </ol>
        </div>
    );
};

export default App;
