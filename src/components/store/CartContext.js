import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
    items: [],
    totalAmount: 0,
})
const CartProvider = ({ children }) => {
    const [cartState, setCartState] = useState([])
    const totalAmount = cartState.reduce((prev, current) => prev + current.amount, 0)
    function addItem(data) {
        if (!cartState.length) {
            return setCartState([data])
        }
        const isExist = cartState.find((item) => item.title === data.title)
        if (!isExist) {
            return setCartState([...cartState, data])
        }
        const updatedItem = cartState.map((item) => {
            if (item.id === data.id) {
                return {
                    ...item,
                    amount: item.amount + data.amount,
                };
            }
            return item;
        });

        setCartState([...updatedItem])
    }
    const incrementAmount = (id) => {
        const updatedItems = cartState.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    amount: item.amount + 1,
                };
            }
            return item;
        });
        setCartState(updatedItems);
    }
    const decrementAmount = (id) => {
        let updatedItems = cartState.map((item) => {
            if (item.id === id) {
                if (item.amount <= 1) {
                    return null
                }
                return {
                    ...item,
                    amount: item.amount - 1,
                };
            }
            return item;
        }).filter(Boolean);
        setCartState(updatedItems);
    }
    const cartValue = {
        items: cartState,
        totalAmount,
        addItem,
        incrementAmount,
        decrementAmount,
    }
    return <CartContext.Provider value={cartValue} >
        {children}
    </CartContext.Provider>
}
export default CartProvider