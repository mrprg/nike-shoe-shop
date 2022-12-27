import React from 'react';
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

const Item = ({ id, color, shadow, title, text, img, btn, rating, price }) => {
  return (
    <>
      <div>
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
          <div>
            <div>
              <h1>{price}</h1>
            </div>
            <div>
              <h1><StarIcon className='icon-style text-slate-900' />{rating}</h1>
            </div>
          </div>
          <div>
            <button type='button' className=''><ShoppingBagIcon className='icon-style text-slate-900'/></button>
            <button type='button' className=''>{btn}</button>
          </div>
        </div>
        <div><img
          src={img}
          alt='image'
          className=''
         />
         </div>
      </div>
    </>
  )
}

export default Item