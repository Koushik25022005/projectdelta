import { UserButton } from '@clerk/nextjs'
import React from 'react'

const DashboardPage = () => {
  return (
    <div>
      <p>Dash Board page</p>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default DashboardPage
