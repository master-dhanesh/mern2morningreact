import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container p-5 mt-5 alert alert-dark">
            <h3>This is Home Page</h3>

            <Link to="/gallery" className="btn btn-primary">
                Gallery
            </Link>
        </div>
    );
};

export default Home;
