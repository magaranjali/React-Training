import React from 'react'

const Student = (props) => {
    // props - {name: 'Shaktiman', roll: '1', address: 'delhi'}
   
    /* Destructuring the object
    const {name, roll, address} = props
    return (
        <div className='p-10 text-2xl'>
            <h1>
            Name: {name}
            </h1>
            <h2>Roll No.: {roll}</h2>
            <h2>Address: {address}</h2>
        </div>
        */
       
  return (
    <div className='p-10 text-2xl'>
        <h1>
        Name: {props.name}
        </h1>
        <h2>Roll No.: {props.roll}</h2>
        <h2>Address: {props.address}</h2>
    </div>
  )
}

export default Student