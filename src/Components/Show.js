import React, { Component } from "react";

export default class Show extends Component {
    componentWillUnmount() {
        console.log("COMPONENTWILLUNMOUNT SHOW.JS");
        alert("Do you want to leave this page?");
    }

    render() {
        return (
            <div className="alert alert-danger mt-3">
                This is Show Component
            </div>
        );
    }
}
