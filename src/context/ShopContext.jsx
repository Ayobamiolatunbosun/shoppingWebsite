import React, {createContext, useCallback, useEffect, useMemo, useState} from 'react'
import all_product from '../components/Assets/all_product'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const savedCart = localStorage.getItem('shopper-cart');
            return savedCart ? JSON.parse(savedCart) : {};
        } catch {
            return {};
        }
    });

    useEffect(() => {
        localStorage.setItem('shopper-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = useCallback((productId, size = 'M', quantity = 1) => {
        const lineKey = `${productId}_${size}`;
        setCartItems((current) => ({
            ...current,
            [lineKey]: (current[lineKey] || 0) + quantity,
        }));
    }, []);

    const updateCartItem = useCallback((lineKey, quantity) => {
        setCartItems((current) => {
            const updated = { ...current };
            if (quantity <= 0) {
                delete updated[lineKey];
            } else {
                updated[lineKey] = quantity;
            }
            return updated;
        });
    }, []);

    const removeFromCart = useCallback((lineKey) => updateCartItem(lineKey, 0), [updateCartItem]);
    const cartCount = Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
    const cartTotal = Object.entries(cartItems).reduce((total, [lineKey, quantity]) => {
        const productId = Number(lineKey.split('_')[0]);
        const product = all_product.find((item) => item.id === productId);
        return total + (product ? product.new_price * quantity : 0);
    }, 0);
    const ContextValue = useMemo(() => ({
        all_product,
        cartItems,
        addToCart,
        updateCartItem,
        removeFromCart,
        cartCount,
        cartTotal,
    }), [cartItems, addToCart, updateCartItem, removeFromCart, cartCount, cartTotal]);

    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;