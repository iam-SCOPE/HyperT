import { createContext } from "react";

export const CartContext = createContext();


// Add items to cart
export function addToCart(productId) {
    // Get the current cart items from the cookie or initialize an empty array
    let cartItems = JSON.parse(getCookie("cartItems")) || [];

    // Add the new item to the cart
    cartItems.push(productId);

    // Store the updated cart items back into the cookie
    setCookie("cartItems", JSON.stringify(cartItems), 30); // 30 days expiry
}

//Remove a product from the cart
export function removeFromCart(productId){
    let cartItems = JSON.parse(getCookie("cartItems")) || [];

    // Remove the item from the cart
    const newArray = cartItems.filter(item => item !== productId)

    // Store the updated cart items back into the cookie
    setCookie("cartItems", JSON.stringify(newArray), 30); // 30 days expiry
}

// Function to set a cookie
export function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
export function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}