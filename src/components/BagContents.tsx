import { useState } from "react";
import CartItem from "./CartItem";

interface BagItem{
   "slice": number,
   "mini": number,
   "whole": number,
   "id": string,
   "url": string,
   "title": string,
   "slicePrice": number,
   "miniPrice": number,
   "wholePrice": number
}

const BagContents = (props: {items: BagItem[], isEditing: boolean, handleRemoveItem: (id: string) => void}) => {
   //total will be calculated on client and confirmed on server
   let subTotal = props.items.map((e: any) => {
      const temp = (e.slicePrice * e.slice) + (e.miniPrice * e.mini) + (e.wholePrice * e.whole)
      e = temp;
      return e
   }).reduce((a,c) => a+c,0)
   


   
   return (
      <div className="bg-white flex-col justify-between flex p-2 rounded-lg min-h-[225px]">
         {props.items.map((e,i) => 
            <CartItem title={e.title} handleRemoveItem={props.handleRemoveItem} url={e.url} totalMinis={e.mini} total={(e.slicePrice * e.slice) + (e.miniPrice * e.mini) + (e.wholePrice * e.whole)} totalSlices={e.slice} totalWhole={e.whole} isEditing={props.isEditing} id={e.id} slicePrice={e.slicePrice} miniPrice={e.miniPrice} wholePrice={e.wholePrice} key={i} />
         )}
         <div className="">
            <div className="w-full h-[2px] rounded-lg bg-[#acacac] mt-4 mb-2"></div>
            <div className="flex flex-col items-end px-4 mb-2">
               <span className="font-bold text-lg">Sub-Total</span>
               <span className="leading-none">${subTotal}</span>
            </div>
         </div>
      </div>
   )
}

export default BagContents