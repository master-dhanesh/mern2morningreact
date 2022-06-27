import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
    // Add a request interceptor
    axios.interceptors.request.use(
        function (config) {
            // axios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";

            console.log("--I'M GOING--");
            console.log(config);

            return config;
        },
        function (error) {
            // Do something with request error
            return Promise.reject(error);
        }
    );

    // Add a response interceptor
    axios.interceptors.response.use(
        function (response) {
            console.log("--I'M COMING--");
            console.log(response);

            return response.data.results.splice(10, 10);
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const upcoming = await axios.get(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1`
                // {
                //     headers: { api: "jksdfn9834jkds" },
                // }
            );
            console.log(upcoming);
        } catch (error) {
            console.log(error);
        }
    };

    return <div>App</div>;
};

export default App;
