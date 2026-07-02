import React, { useContext } from 'react'
import Student from '../components/Student'
import { MyContext } from '../hooks/MyContext'

const Classroom = () => {
    let msg = useContext(MyContext)
  return (
    <div className='p-10 text-2xl'>
        <h1>{msg}</h1>
        <Student name='Shaktiman' roll='1' address='delhi' />
        <Student name = 'Krishna' roll = '21' address = 'Vridavan' />
        <Student name = 'Kans' roll = '22' address = 'lanka' />

    </div>
  )
}

export default Classroom