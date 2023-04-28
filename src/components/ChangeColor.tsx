import React, { useRef } from 'react'

export default function ChangeColor() {
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const varRef = useRef<string>("")

  const handleColor = ():void => {
    if(divRef.current !== null && inputRef.current !== null){
      divRef.current.style.backgroundColor = inputRef.current.value;
      
      varRef.current = inputRef.current.value;
      console.log(varRef.current);

      inputRef.current.value="";
  }
  }
  return (
    <>
    <input ref={inputRef} />
    <button onClick={handleColor}>색상 변경</button>
    <div ref={divRef}>색상을 변경할 DIV</div>
    </>
  )
}
