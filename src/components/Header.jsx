import React from 'react';

const Header = ({ headerapi: { title, subtitle, img, btntext, videos, sociallinks } }) => {
  return (
    <>
        <div>
            <div></div>
            <div>
                <div>
                    <h1>{title}</h1>
                    <h1>{subtitle}</h1>
                    <button>{btntext}</button>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <Img 
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