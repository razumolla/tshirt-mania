import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Uncle from '../Uncle/Uncle'
import Father from '../Father/Father'
import Aunty from '../Aunty/Aunty'

/* 
== Context API ==
1. Call createContext
2. set a variable of the context with upperCase
3. make sure you export the context to use it in other places
4. Wrap your child context using RingContext.Provider 
5. provide a value

6. to consume the context from child component
7. useContext hook and you will you need to pass the contextName
8. Make sure you take note.. 

 */
export const RingContext = createContext('ring')

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornaments = 'Kada Matir Ring';

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    };

    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa' >
                <h2>Grandpa</h2>
                <p>House: {house}
                    <button onClick={handleBuyAHouse}> Buy a House</button>
                </p>
                <section style={{ display: 'flex' }}>
                    <Father house={house}> </Father>
                    <Uncle house={house}> </Uncle>
                    <Aunty house={house}> </Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;