import { useState } from "react";
import Mydate from "./Components/Mydate";
import Mytime from "./Components/Mytime";

const App = () => {
    const [mytime, setMytime] = useState(new Date().toLocaleTimeString());
    const [mydate, setMydate] = useState(
        new Date().toLocaleDateString("default", {
            year: "numeric",
            day: "numeric",
            month: "short",
            weekday: "short",
        })
    );

    const [show, setShow] = useState(false);

    const ClickHandler = () => {
        setShow(!show);
    };

    return (
        <div className="container mt-5 alert alert-success">
            <button
                onClick={ClickHandler}
                className={`btn btn-${show ? "success" : "primary"} w-25 `}
            >
                {show ? "Hide" : "Show"}
            </button>
            <hr className="w-50" />

            {show ? (
                <>
                    <Mytime mytime={{ mytime, setMytime }} />
                    <hr className="w-25" />
                    <Mydate mydate={{ mydate, setMydate }} />
                </>
            ) : (
                "Toggle button to see date time"
            )}
        </div>
    );
};

export default App;
