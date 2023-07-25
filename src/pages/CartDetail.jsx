import React from "react";

import { useSelector } from "react-redux";



export default function CartDetail() {
    

    const {cartItems} = useSelector((state) => state.cart);
    return( 
    <div>
        Sepetteki eleman sayısı : {cartItems.length} 
        
      
    </div>
       )
}
