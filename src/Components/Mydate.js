const Mydate = (props) => {
    const { mydate, setMydate } = props.mydate;
    return (
        <div>
            <h4>Present Date</h4>
            <h3>{mydate}</h3>
        </div>
    );
};

export default Mydate;
