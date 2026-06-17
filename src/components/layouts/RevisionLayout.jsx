import React from 'react'
import RevisionHeader from './Revision'
import { Outlet } from 'react-router-dom'

const RevisionLayout = () => {
  return (
    <>
    <RevisionHeader />
    <Outlet />
    </>
  )
}

export default RevisionLayout