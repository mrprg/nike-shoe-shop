import React from 'react'

const Clips = ({ clip, imgsrc, }) => {
  return (
    <>
        <div className='relative h-28 w-32 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14'>
            <img 
            src={imgsrc}
            alt="image"
            className='inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500'
            />
            <video
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            className='absolute top-0 left-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-20 rounded-xl'
            >
                <source type='video/mp4' src={clip} />
            </video>
        </div>
    </>
  )
}

export default Clips;