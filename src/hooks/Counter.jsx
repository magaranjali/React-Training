import React, { useEffect, useState } from 'react'

const Counter = () => {
    let [count, setcount] = useState(0)
    let [data, setdata] = useState(100)
    
    const decrease = () => {
        if (count>0){
            setcount(count-1)
        }
    }
    
    const decrement = () => {
        if (data>0){
            setdata(data-10)
        } 
    }
     
    /* let [variable_name, function] = userState(initial value)  
    
    variable_name : state varibale
    function: function to update the state_variable

    initial value: 
    0-9 : number
    '' or "" : string
    true or false : boolean
    [] : array
    {} : js object

    useEffect -
        to show side effects when state changes

        syntax :
            useEffect(function, [dependency])

            function -> side effects to show
            dependency -> states that trigger the function

            useEffect(() => {}, []) -> effect is seen on page load only
            useEffect(() => {}, [a, b, c]) -> effect is seen on page load and when a or b or c changes
            useEffect(() => {}) -> effect is seen on page load and when any state changes. (Page slow and a very bad practice)
    */

            useEffect(() => {
                alert("Value updated")
            }, [count, data])


  return (
    <>
    <div className='h-[60vh] flex items-center justify-center text-4xl flex-col gap-3'>
        Count: {count}

        <button onClick={() =>{
            setcount(++count)
        } } className='bg-blue-500 hover:bg-blue-300 active:bg-blue-600 px-5 py-2 uppercase text-white'>

        Increase
        </button>
        <button onClick={() =>{
            setcount(--count)
        } } className='bg-blue-500 hover:bg-blue-300 active:bg-blue-600 px-5 py-2 uppercase text-white'>

        Decrease
        </button>

        <button onClick={() =>{
            setcount(0)
        } } className='bg-blue-500 hover:bg-blue-300 active:bg-blue-600 px-5 py-2 uppercase text-white'>
            Reset
        </button>

    
    </div>

    <div className='h-[20vh] flex items-center justify-center text-4xl flex-col gap-3'>
        Data: {data}

        <button onClick={() =>{
            setdata(data+=10)
        } } className='bg-blue-500 hover:bg-blue-300 active:bg-blue-600 px-5 py-2 uppercase text-white'>

        Increase
        </button>
        <button onClick={() =>{
            setdata(data-=10)
        } } className='bg-blue-500 hover:bg-blue-300 active:bg-blue-600 px-5 py-2 uppercase text-white'>

        Decrease
        </button>

        <button onClick={() =>{
            setdata(100)
        } } className='bg-blue-500 hover:bg-blue-300 active:bg-blue-600 px-5 py-2 uppercase text-white'>
            Reset
        </button>

    
    </div>

    </>

  )
}

export default Counter