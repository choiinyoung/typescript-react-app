import React from 'react'
import { Task } from './Todo'

export default function List({
  task,
  done,
}:Task) {
  return (
    <>
      <h2>할 일 : {task}</h2>
      <h2>완료 여부 : {done ? "완료" : "미완료"}</h2>
    </>
  )
}
