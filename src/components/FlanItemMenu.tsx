`use client`

import { useSearchParams } from 'next/navigation'
import { useState } from 'react';
import AddToBagButton from './AddToBagButton';
import ItemSelectionMenu from './ItemSelectionMenu';

interface Bag{
   "slice": number,
   "mini": number,
   "whole": number
}

const FlanItemMenu = (props: { slicePrice: number, miniPrice: number, wholePrice: number, id: string }) => {
   const [selectedItems, setSelectedItems] = useState<Bag>({slice: 0, mini: 0, whole: 0});

   const searchParams = useSearchParams();

   const itemType = searchParams.get("t");

   const handleAddToBag = () => {
      //add to the bag
   }

   const handleCount = (isDown: boolean, type: string) => {
      const objToSet: Record<string, any> = {slice: selectedItems.slice, mini: selectedItems.mini, whole: selectedItems.whole};
      isDown ? objToSet[type]-- : objToSet[type]++;
      setSelectedItems(objToSet as Bag);
   }

   return (
      <div id="itemMenu" className="bg-white p-4 rounded md:w-[768px] lg:w-full lg:shadow-lg">
         <div className="p-2 mb-2 pb-3 border-b-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-slice" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
               <path d="M3 19l15 -15l3 3l-6 6l2 2a14 14 0 0 1 -14 4" />
            </svg>
            <span className="font-semibold">Slice - <span className="font-normal text-sm">${props.slicePrice}</span></span>
            <ItemSelectionMenu type="slice" isIncrementedByParam={itemType === "slice"} handleCount={handleCount} selectedItems={selectedItems} />
         </div>
         <div className="p-2 mb-2 pb-3 border-b-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cake" width="17" height="17" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
               <path d="M3 20h18v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8z" />
               <path d="M3 14.803c.312 .135 .654 .204 1 .197a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1c.35 .007 .692 -.062 1 -.197" />
            </svg>
            <span className="font-semibold">Mini - <span className="font-normal text-sm">${props.miniPrice}</span></span>
            <ItemSelectionMenu type="mini" isIncrementedByParam={itemType === "mini"} handleCount={handleCount} selectedItems={selectedItems} />
         </div>
         <div className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cake" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
               <path d="M3 20h18v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8z" />
               <path d="M3 14.803c.312 .135 .654 .204 1 .197a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1c.35 .007 .692 -.062 1 -.197" />
            </svg>
            <span className="font-semibold">Whole - <span className="font-normal text-sm">${props.wholePrice}</span></span>
            <ItemSelectionMenu type="whole" isIncrementedByParam={itemType === "whole"} handleCount={handleCount} selectedItems={selectedItems} />
         </div>
         {(selectedItems.mini > 0 || selectedItems.slice > 0 || selectedItems.whole > 0) &&
            <>
               <div className="text-end mt-2 text-sm font-semibold">
                  <span className="mx-2">{selectedItems.slice} slices</span>
                  <span className="mx-2">{selectedItems.mini} minis</span>
                  <span className="mx-2">{selectedItems.whole} whole</span>
               </div>
               <div className="flex justify-end mt-3">
                  <AddToBagButton id={props.id} handleAddToBag={handleAddToBag} />
               </div>
            </>
         }
      </div>
   )
}

export default FlanItemMenu