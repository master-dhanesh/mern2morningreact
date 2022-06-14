import Mydate from "./Components/Mydate";
import Mytime from "./Components/Mytime";

const App = () => {
    return (
        <div className="container mt-5 alert alert-dark">
            <Mytime />
            <hr className="w-25" />
            <Mydate />
        </div>
    );
};

export default App;
