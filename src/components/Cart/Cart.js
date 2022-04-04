import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    // conditional rendering
    // 1 . Element variable
    // 2 . Ternary operator>  condition ? true : false 
    // 3. && operator (shorthand operator)
    // 4. || (jodi bamer ta mitta hoi)
    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>ohh kipta, khoroch kor</h5>
            <p>kinos na ken</p>
            <p>Please Add at least one item!!! </p>
        </div>
    }
    else if (cart.length === 1) {
        command = <p>Please Add more...</p>
    }
    else {
        command = <p> <small> Thanks for adding Item </small> </p>
    }


    return (
        <div>
            <h2>Item selected:{cart.length}</h2>
            {
                cart.map(tShirt =>
                    <p>
                        {tShirt.name}
                        <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                    </p>)
            }

            {cart.length === 0 || <p className='orange'>YAY! You are Buying </p>}

            {cart.length === 3 && <div className='orange'>
                <h3>trigonal</h3>
                <p>tin jon ke ki gift diba</p>
            </div>}
            {command}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove All</button>}
            {cart.length === 5 && <button className='orange'>Review order</button>}
        </div>
    );
};

export default Cart;