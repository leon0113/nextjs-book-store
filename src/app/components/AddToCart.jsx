'use client'
import { FaShoppingCart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useContext } from "react";
import { StoreContext } from "../context";

export default function AddToCart({ book }) {

    const { cartData, setCartData } = useContext(StoreContext)

    const handleCart = (e, name) => {
        e.preventDefault();
        // console.log("clicked");
        // console.log(book, name);

        const newData = { ...book, type: name };
        setCartData([...cartData, newData]);

        toast.success(`${book.title} is added to the cart`);

    }

    // console.log(cardData);

    return (
        <div className='flex justify-around mt-5 border-t-2 p-1 gap-4'>
            <button className="bg-purple-500 hover:bg-purple-700 text-white py-1 px-2 rounded flex justify-center items-center gap-1"
                onClick={(e) => handleCart(e, 'buy')}
            >
                <FaShoppingCart className="w-4 h-4" />
                To buy
            </button>
            <button className="bg-purple-500 hover:bg-purple-700 text-white py-1 px-2 rounded flex justify-center items-center gap-1"
                onClick={(e) => handleCart(e, 'rent')}
            >
                <FaShoppingBag className="w-4 h-4" />
                To rent
            </button>

        </div>
    )
}
