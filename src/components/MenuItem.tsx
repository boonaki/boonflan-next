
const MenuItem = (props: {url: string, altTitle: string | null, title: string, slicePrice: number, miniPrice: number, wholePrice: number, description: string}) => {
   return (
      <div className="px-8 mb-8 sm:px-6">
         <div className="flex flex-col">
            <div className="pr-2">
               <div className="flex">
                  <a href={`/order/${props.url}`}><h3 className="title-span leading-none font-bold text-2xl">{props.title}</h3></a>
                  {props.altTitle && <span className="font-bold text-sm p-1 rounded-lg bg-[#5555551c] text-[#a48a69] ml-1">{props.altTitle}</span>}
               </div>
               <p className="leading-none mt-2 font-serif italic">{props.description}</p>
            </div>
            <div className="flex flex-wrap mb-2 text-sm gap-x-2">
               <a href={`/order/${props.url}?t=slice`} className="mt-2 block rounded-full bg-[#f7ba84] px-3 py-1 font-semibold flex items-center hover:bg-[#ffa95e] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-slice mr-1" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                     <path d="M3 19l15 -15l3 3l-6 6l2 2a14 14 0 0 1 -14 4" />
                  </svg>
                  By Slice - ${props.slicePrice}
               </a>
               <a href={`/order/${props.url}?t=mini`} className="mt-2 block rounded-full bg-[#f7ba84] px-3 py-1 font-semibold flex items-center hover:bg-[#ffa95e] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cake mr-1 mb-1" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                     <path d="M3 20h18v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8z" />
                     <path d="M3 14.803c.312 .135 .654 .204 1 .197a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1c.35 .007 .692 -.062 1 -.197" />
                  </svg>
                  Mini ${props.miniPrice}
               </a>
               <a href={`/order/${props.url}?t=whole`} className="mt-2 block rounded-full bg-[#f7ba84] px-3 py-1 font-semibold flex items-center hover:bg-[#ffa95e] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cake mr-1 mb-1" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.25" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                     <path d="M3 20h18v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8z" />
                     <path d="M3 14.803c.312 .135 .654 .204 1 .197a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1c.35 .007 .692 -.062 1 -.197" />
                  </svg>
                  Whole ${props.wholePrice}
               </a>
            </div>
         </div>
         <a href={`/order/${props.url}`} className="group"><img src="/flan-test.jpg" alt="" className="rounded-xl shadow-xl w-[450px] sm:w-[375px] group-hover:scale-[1.02] group-target:scale-[1.02] transition"></img></a>
      </div>
   )
}

export default MenuItem