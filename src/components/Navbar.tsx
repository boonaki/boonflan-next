
const Navbar = () => {
   return (
      <header className="w-full md:flex md:flex-col md:items-center">
         <div className="spacer w-full h-[50px]"></div>
         <nav className="sticky top-0 flex items-center justify-between px-6 md:w-[768px]">
            <a href="/#menu" className="p-2 rounded-xl bg-[#5555551c] md:bg-transparent md:hover:bg-[#5555551c] md:transition">
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home md:h-[42px] w-[42px]" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
               </svg>
            </a>
            <a href="/bag" className="p-2 rounded-xl md:hover:bg-[#5555551c] md:transition">
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-paper-bag md:h-[42px] w-[42px]" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 3h8a2 2 0 0 1 2 2v1.82a5 5 0 0 0 .528 2.236l.944 1.888a5 5 0 0 1 .528 2.236v5.82a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-5.82a5 5 0 0 1 .528 -2.236l1.472 -2.944v-3a2 2 0 0 1 2 -2z" />
                  <path d="M14 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M6 21a2 2 0 0 0 2 -2v-5.82a5 5 0 0 0 -.528 -2.236l-1.472 -2.944" />
                  <path d="M11 7h2" />
               </svg>
            </a>
         </nav>
         <div className="spacer w-full h-[25px]"></div>
      </header>
   )
}

export default Navbar