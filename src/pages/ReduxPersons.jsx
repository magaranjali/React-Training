import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxPersons = () => {

let [nam, setName] = useState('')
let [phon, setPhone] = useState('')
    
let {name, phone} = useSelector(store => store.personStore)

const updatePhone = e => {
    setPhone(e.target.value)
}

const dispatch = useDispatch()   // to dispatch action

  return (
    <div className='flex justify-center items-center flex-col gap-4 h-[70vh]'>
        <h1>NAME: {name} </h1>
        <input type="text"  className='border px-3 py-2' placeholder='Enter Name' 
        onChange={ e =>setName(e.target.value)}
        />
        <button className='btn btn-light px-5 py-3'
        onClick={()=>dispatch({type: "UPDATE_NAME", payload: nam})}
        >Update Name</button>

        <h2>PHONE: {phone} </h2>
        <input type="text"  className='border px-3 py-2' placeholder='Enter Phone' 
        onChange={updatePhone}/>
        <button className='btn btn-light px-5 py-3'
        onClick={()=>dispatch({type: "UPDATE_PHONE", payload: phon})}
        >Update Phone</button>
    </div>
  )
}

export default ReduxPersons