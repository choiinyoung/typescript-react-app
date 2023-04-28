import React, { useRef, useState } from 'react'
import List from './List';

export interface Task {
  task:string;
  done:boolean;
}

export default function Todo() {
  // 반영되면 바로 리랜더링 되기위해 useState 사용
  const [taskList, setTaskList] = useState<Task[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const testList: Task[] = [{ task: 'TS 배우기', done:false},{ task: 'TS 배우기', done:false}]

  const addTask = ():void => {
    // let copyArr: Task[]= [...taskList]; //taskList는 주소값을 가져가서 차이를 못 느낌
    
    if(inputRef.current !== null){
      let newTask: Task = { task: inputRef.current.value, done: false};    
      setTaskList([...taskList, newTask])
      // copyArr.push(newTask);
      // setTaskList((cur: Task[]) => copyArr);
      // inputRef.current.value = ""
    }
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={addTask}>할 일 추가</button>
      <h1>할 일 목록</h1>
      {taskList?.map((el,idx) => <List task={el.task} done={el.done} key={idx}/>)}
    </>
  )
}
