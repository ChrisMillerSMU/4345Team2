import Image from 'next/image'
import React from 'react'

export function Longcard({ description, side, url }) {
  return (
    <div className='hover:scale-105 transition-all'>
      <a href={url} style={{ cursor: "pointer" }}>
        {true &&
          <div className={side > 0 ? 'flex flex-row bg-blue-400 rounded-lg shadow-md w-[90vw]' : 'flex flex-row-reverse bg-red-400 rounded-lg shadow-md w-[90vw]'}>
            <div className={side > 0 ? 'mt-1 md:mr-[10vw] max-w-[90%] flex-row px-5 pb-5 mx-auto' : 'mt-1 md:ml-[10vw] max-w-[90%] flex-row px-5 pb-5 mx-auto'}>
              <h5 className={side > 0 ? 'text-5xl font-bold tracking-tight text-white pr-[30vw] pt-3' : 'text-5xl font-bold tracking-tight text-white pl-[30vw] pt-3'}>
                {description}
              </h5>
            </div>
          </div>
        }
      </a>
    </div>
  )
}
