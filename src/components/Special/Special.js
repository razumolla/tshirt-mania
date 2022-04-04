import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext)

    return (
        <div>
            <h5>special</h5>
            <p> <small>House:{house} </small> </p>
            <button onClick={() => setHouse(house + 1)}> Buy a House</button>
        </div>
    );
};

export default Special;