import React from 'react';

const Header = ({ headerapi: { title, subtitle, img, btntext, videos, sociallinks } }) => {
  return (
    <>
        <div className='relative h-auto w-auto flex flex-col'>
            <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] 
            md:h-[65vh] sm:h-[55vh] w-auto absolute 
            top-0 left-0 right-0 opacity-100 z-10'></div>
            <div className='relative opacity-100 z-20 grid 
            items-center justify-items-center nike-container'>
                <div>
                    <h1>{title}</h1>
                    <h1>{subtitle}</h1>
                    <button>{btntext}</button>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <img 
                        src={img}
                        alt='Nike'
                        className=''
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Header;