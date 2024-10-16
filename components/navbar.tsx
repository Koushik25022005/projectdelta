import React from 'react'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='flex items0-center p-4'>
        <Button>
            <Menu/>
        </Button>
    </div>
  )
}

export default Navbar
