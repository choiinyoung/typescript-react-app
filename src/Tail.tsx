import React, { useState } from 'react'

export default function Tail() {
  const [toggle, setToggle] =useState<boolean>(false);

  const toggleMenu = (): void => {
    setToggle((cur:boolean)=> !cur);
  }
  return (
    <nav className='w-auto pl-10 pr-10 bg-slate-100'>
      <div className='flex justify-between py-5'>
        <ul className='flex gap-16'>
          
          <li className='py-2  flex font-extrabold cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fill-rule="evenodd" d="M.75 9.75a3 3 0 013-3h15a3 3 0 013 3v.038c.856.173 1.5.93 1.5 1.837v2.25c0 .907-.644 1.664-1.5 1.838v.037a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6zm19.5 0a1.5 1.5 0 00-1.5-1.5h-15a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-6z" clip-rule="evenodd" />
          </svg>
          
            YOUNG</li>
          <li className='py-2 font-semibold hidden md:block cursor-pointer text-slate-500'>Menu1</li>
          <li className='py-2 font-semibold hidden md:block cursor-pointer text-slate-500'>Menu2</li>
          <li className='py-2 font-semibold hidden md:block cursor-pointer text-slate-500'>Menu3</li>
        </ul>
        <a href="#" className='py-2 px-3 hidden md:block text-white font-bold bg-orange-500 hover:bg-slate-600 rouded duration-300'>Login</a>
        {/* 모바일 메뉴 파트 */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mr-2 text-orange-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* 모바일 토글 파트 */}
      <div className={ toggle ? "md:hidden py-3" : "hidden py-3"}>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu1
        </a>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu2
        </a>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu3
        </a>
      </div>
    </nav>
  )
}
