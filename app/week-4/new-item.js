"use client"

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="mb-4 text-xl font-bold text-black">Quantity: {quantity}</h2>
            <div>
                <button
                type="button"
                onClick={increment}
                disabled={quantity === 20}
                className="bg-green-500 hover:bg-green-700 text-white font-bold w-10 text-center py-2 px-4 rounded">
                    +
                </button>
                <button
                type="button"
                onClick={decrement}
                disabled={quantity === 1}
                className="bg-red-500 hover:bg-red-700 text-white font-bold w-10 text-center py-2 px-4 rounded mb-4">
                    -
                </button>
            </div>
        </div>
    );
}