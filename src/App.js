import axios from "axios";
import React, { Component } from "react";
import Show from "./Components/Show";

class App extends Component {
    state = {
        show: true,
        posts: [],
    };

    constructor() {
        super();
        console.log("--CONSTRUCTOR APP.JS");
    }

    render() {
        console.log("--RENDER APP.JS", this.state);
        return (
            <div className="container mt-5 alert alert-success p-5">
                <button
                    onClick={() => this.setState({ show: !this.state.show })}
                    className="btn btn-primary"
                >
                    {this.state.show ? "Hide" : "Show"}
                </button>
                {this.state.show && <Show />}
                <hr />
                {this.state.posts.map((post) => (
                    <p key={post.id}>{post.title}</p>
                ))}
            </div>
        );
    }

    async componentDidMount() {
        console.log("--COMPONENTDIDMOUNT APP.JS");
        this.fetchPosts();
    }

    fetchPosts = async () => {
        const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/posts`
        );
        this.setState({ posts: data });
    };

    componentDidUpdate(prevProps, prevState) {
        console.log("COMPONENTDIDUPDATE APP.JS", prevProps, prevState);
    }
}

export default App;

// import axios from "axios";

// const App = () => {
//     const fetchPosts = async () => {
//         const { data } = await axios.get(
//             `https://jsonplaceholder.typicode.com/posts`
//         );
//         console.log(data);
//     };

//     return (
//         <div className="container mt-5">
//             <button onClick={fetchPosts} className="btn btn-primary">
//                 Fetch Posts
//             </button>
//         </div>
//     );
// };

// export default App;
