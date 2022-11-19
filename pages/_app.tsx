import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <section className="md:flex hidden bg-gradient-to-br from-red-400 via-red-400 to-blue-400">
        <a href="/" className='cursor-pointer'>
          <div className='transform transition duration-500 hover:scale-105 z-10 fixed w-full mt-4 text-white '>
            <div className='container text-center mx-auto px-8 py-4 items-center justify-between bg-gray-500 rounded-md text-5xl font-bold tracking-tight text-white'>
              Home
            </div>
          </div>
        </a>
      </section>
      <section className="flex md:hidden justify-center bg-black-200">
        <a href="/" className='cursor-pointer'>
          <div className='transform transition duration-500 hover:scale-105 z-10 fixed w-1/2 mt-4 text-white '>
            <div className='container text-center mx-auto px-8 py-2 items-center justify-between bg-gray-500 rounded-md text-2xl font-bold tracking-tight text-white'>
              Home
            </div>
          </div>
        </a>
      </section>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
