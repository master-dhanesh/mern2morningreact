import { useState } from "react";

const Mydate = () => {
    const [mydate, setMydate] = useState(
        new Date().toLocaleDateString("default", {
            year: "numeric",
            day: "numeric",
            month: "short",
            weekday: "short",
        })
    );
    return (
        <div>
            <h4>Present Date</h4>
            <h3>{mydate}</h3>
        </div>
    );
};

export default Mydate;
