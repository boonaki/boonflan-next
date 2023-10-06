
const CartItem = (props: { title: string, total: number, url: string, totalSlices: number, totalMinis: number, totalWhole: number, isEditing: boolean, handleRemoveItem: (id: string) => void, id: string }) => {
   return (
      <div className="flex my-3">
         {props.isEditing &&
            <button onClick={() => props.handleRemoveItem(props.id)} className="ml-2 mr-3" >
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-minus" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 12l6 0" />
               </svg>
            </button>
         }
         <a href={`/flan/${props.url}`} className="group mr-2">
            <img src="/flan-test.jpg" alt="" className="rounded-xl shadow-xl w-[50px] group-hover:scale-[1.02] group-target:scale-[1.02] transition"></img>
         </a>
         <div className="w-full">
            <div className="flex items-end justify-between">
               <a href={`/flan/${props.url}`} className="font-semibold text-lg w-fit block mr-1">{props.title}</a>
               <div className="grow h-full border-b-2 border-[#acacac] relative top-[-5px] border-dotted border-black"></div>
               <span className="ml-1">${props.total}</span>
            </div>
            <div className="gap-1 grid grid-cols-3 w-fit mt-1">
               <span className="text-sm leading-none">{props.totalSlices} slices</span>
               <span className="text-sm leading-none">{props.totalMinis} mini</span>
               <span className="text-sm leading-none">{props.totalWhole} whole</span>
            </div>
         </div>
      </div>
   )
}

export default CartItem