import React from 'react';
const Cart = (props) => {
    const cart = props.cart;
    const totalSalary = cart.reduce((sum, player) => sum + player.salary,0);
    return (
        <div>
            <h3>Player:{cart.length}</h3>
            <h3>Total salary:${totalSalary}</h3>
        </div>
       
    );
};

export default Cart;
