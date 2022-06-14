import { useState } from "react";

const Mytime = () => {
    const [mytime, setMytime] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
        setMytime(new Date().toLocaleTimeString());
    }, 1000);

    return (
        <div>
            <h4>Live Time</h4>
            <h3>{mytime}</h3>
        </div>
    );
};

export default Mytime;
