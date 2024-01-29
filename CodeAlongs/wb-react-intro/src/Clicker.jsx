import { useState } from "react";

function Clicker(props) {
    const [count, setCount] = useState(props.initCount || 0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={increaseCount}>Increase Count</button>
        </div>
    )
}

export default Clicker;