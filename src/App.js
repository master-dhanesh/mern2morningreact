import axios from "axios";
import { useEffect, useState } from "react";
import Show from "./Components/Show";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [show, setShow] = useState(false);

    const fetchPosts = async () => {
        const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/posts`
        );
        setPosts(data);
    };

    useEffect(() => {
        if (posts.length == 0) {
            fetchPosts();
        }

        return () => {
            console.log("COMPONENT DELETED!");
        };
    }, [show]);

    console.log(show);

    return (
        <div className="container mt-5">
            <button onClick={fetchPosts} className="btn btn-primary">
                Fetch Posts
            </button>{" "}
            |
            <button onClick={() => setShow(!show)} className="btn btn-primary">
                Invert Show
            </button>{" "}
            |
            <button onClick={() => setPosts([])} className="btn btn-primary">
                Empty Posts
            </button>
            {show && <Show />}
            <hr />
            {JSON.stringify(posts, null, 4)}
        </div>
    );
};

export default App;
