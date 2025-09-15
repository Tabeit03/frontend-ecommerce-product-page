import React from "react";
import iconDelete from "../images/icon-delete.svg";

export default function Cart() {

    const productName = "Autumn Limited Edition Sneakers";
     

    return (
    <>
    <article className="bg-white rounded-2xl shadow-2xl p-8 absolute right-8 left-8 top-32 lg:top-20 lg:w-96 lg:left-auto"
    style={{
        zIndex: 1000,
    }}>
    
        <h2 className="border-b border-slate-400 pb-2 mb-6 font-bold">Cart</h2>
 
 <div className="flex items-center justify-between gap-4">   
    
     <img  src="/images/image-product-1-thumbnail.jpg" alt="" className=" rounded-lg "/>

    {/* product in cart */}
    <ul className="flex-1  text-slate-600">
        <li>{`${productName.substring(0, 23)}...`}</li>
        <li>$125.00 x 3 <span className="font-bold text-slate-900">$375.00</span></li>
    </ul>
    {/* Delete button */}
<button>
    <img src={iconDelete} alt="" className="w-4"/>
</button>
   </div>
       {/* Checkout button */}
    <button className= "bg-orange-500 hover:bg-orange-600 justify-center mt-5 py-2 px-4 text-white font-bold rounded-lg shadow w-full transition-all duration-200">
    Checkout</button>
    </article>
    </>
)}