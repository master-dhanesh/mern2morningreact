import React from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
    const navigate = useNavigate();

    const SubsHandle = () => {
        console.log("Form submitted!");
        navigate("/");
    };

    return (
        <div className="container p-5 mt-5 alert alert-dark">
            <h3>This is Contact Page</h3>

            <button onClick={SubsHandle} to="/" className="btn btn-primary">
                Subscribe
            </button>
        </div>
    );
};

export default Contact;
