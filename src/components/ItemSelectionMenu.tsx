import { useState } from "react";

interface Bag{
   "slice": number,
   "mini": number,
   "whole": number
}

const ItemSelectionMenu = (props: {type: string, isIncrementedByParam: boolean, handleCount: (isDown: boolean, type: string) => void, selectedItems: Bag }) => {
   const [cartCount, setCartCount] = useState(0);

   const handleIncrement = () => {
      if (cartCount < 99) {
         props.handleCount(false, props.type);
         setCartCount(cartCount + 1);
      }
   }

   const handleDecrement = () => {
      if (cartCount > 0) {
         props.handleCount(true, props.type);
         setCartCount(cartCount - 1);
      }
   }


   return (
      <div className="mt-1 flex justify-between items-center">
         <div>
            <button title="decrement" onClick={() => handleDecrement()} className="font-bold p-1 px-2 rounded-lg border-2 mr-1 hover:bg-[#f8e0c3] hover:border-transparent transition">
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-minus" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
               </svg>
            </button>
            <button title="increment" onClick={() => handleIncrement()} className="font-bold p-1 px-2 rounded-lg border-2 ml-1 hover:bg-[#f8e0c3] hover:border-transparent transition">
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 5l0 14" />
                  <path d="M5 12l14 0" />
               </svg>
            </button>
         </div>
         <span className="px-2 font-semibold flex items-center">{cartCount}</span>
      </div>
   )
}

export default ItemSelectionMenu