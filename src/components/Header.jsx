import React from 'react';
import "../sytles/Header.css"

export default function Header() {
  return (
    <>
    <div className='header'>
     <ul>
      <li>Menu1</li>
      <li>Menu2</li>
      <li>Menu3</li>
    </ul> 
    <button className='btn'>로그인</button>
    </div>
    </>
  )
}
