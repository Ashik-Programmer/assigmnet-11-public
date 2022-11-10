import { useEffect, useState } from "react";

const useBicycle = () => {
    const [bicycles, setBicycles] = useState([]);
    useEffect(() => {
        fetch('bicycle.json')
            .then(res => res.json())
            .then(data => setBicycles(data))
    }, []);

    return [bicycles, setBicycles];

}

export default useBicycle;