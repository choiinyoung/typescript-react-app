import React from 'react'
import Props from './Props'

export interface MyProps {
  name: string;
  age: number;
  hobbies?: string[];
}

export default function ParentProps() {
  const young : MyProps = {
    name:'최이녕ㅇ',
    age:25,
    hobbies:['공부','유튭'],
  };
  return (
    <>
      <Props name={young.name} age={young.age} hobbies={young.hobbies} />
    </>
  )
}
