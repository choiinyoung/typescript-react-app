// import React, { useRef, useState } from 'react'

// export default function Input() {
//   const [string,setString] = useState<string>("")
//   const inputRef = useRef<HTMLInputElement>(null);

//   const handleChange = ():void =>{
//     if(inputRef.current !== null) setString(inputRef.current.value);
//   };

//   return <>
//       <h1>{string}</h1>
//       <input 
//         ref={inputRef} 
//         onChange={handleChange}
//       />
//     </>
  
// }

import React, { useRef, useState } from 'react'

export default function Input() {
  const [string,setString] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <h1> {string}</h1>
      <input ref={inputRef} onChange={():void=>setString(inputRef.current.value)}/>
    </>
  );
  
}
