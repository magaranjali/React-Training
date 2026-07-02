import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxCounter = () => {

    // let counterStore = useSelector(store => store)
    // let count = counterStore.count

    let {count} = useSelector(store => store.counterStore)
    const dispatch = useDispatch()   // to dispatch action

    // let {count} = useSelector(store => store)     (destructuring)

  return (
    <div className='h-[80vh] flex justify-center items-center text-3xl'>
        <div className='flex flex-col gap-1.5'>
        <h1>Count: {count} </h1>
        <button onClick={()=>dispatch({type: "INCREASE"})}>INCREASE</button>
        <button onClick={()=>dispatch({type: "DECREASE"})}>DECREASE</button>    
        <button onClick={()=>dispatch({type: "RESET"})}>RESET</button>
        </div>
    </div>
  )
}

export default ReduxCounter