import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React from 'react'

const Navbar = () => {
  return (
    <>
        <header>
            <nav>
                <div>
                    <img 
                        src=''
                        alt=''
                        className=''
                    />
                </div>
                <ul>
                    <li>
                        <MagnifyingGlassIcon className='icon-style'/>
                    </li>
                    <li>
                        <HeartIcon />
                    </li>
                    <li>
                        <button type='button' className=''>
                            <ShoppingBagIcon className='icon-style' />
                            <div>0</div>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Navbar;