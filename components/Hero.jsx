import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ArrowForward from '@mui/icons-material/ArrowForward';

export function Hero({ heading, message }) {
  const router = useRouter()
  return (
    <div>
      <section className='pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-gradient-to-br from-red-400 via-blue-600 to-blue-300'>
        <div className='md:flex-1 md:mr-10'>
          <h1 className='font-pt-serif text-5xl font-bold mb-7 text-white'>
            SMU TA Management System
          </h1>
          <p className='font-pt-serif text-3xl font-normal mb-7 text-white'>
            <ArrowForward fontSize='inherit' sx={{marginBottom: '6px'}} />
            {' '} Click {' '}
            <span style={{ cursor: "pointer" }} className='transition hover:text-red-500 duration-100 ease-linear bg-left-bottom bg-no-repeat pb-2 bg-100%' onClick={() => router.push('/auth')}>
              Here
            </span>
            {' '} To Get Started
          </p>
        </div>
      </section>
    </div>
  )
}
