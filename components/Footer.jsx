import Image from 'next/image'

export function Footer() {
  return (
    <footer className='p-4 sm:p-6 bg-gray-500'>
      <div className='md:flex md:justify-between'>
        <div className='mb-6 md:mb-0'>
          <a href='https://www.smu.edu/' target="_blank" rel="noreferrer noopener" className='flex items-center'>
            {/* <span className='self-center text-2xl font-semibold whitespace-nowrap text-primary hover:text-secondary'>
              CONNEQT
            </span> */}
            <Image
            src='/../public/logobluetype2x.png'
            alt='Hero Image'
            width={240}
            height={70}
          />
          </a>
        </div>
        <div className='text-right grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-1 mr-1'>
          {/* <div>
            <h2 className='mb-6 text-sm font-semibold text-highlight uppercase '>
              Resources
            </h2>
            <ul className='text-accent '>
              <li className='mb-4'>
                <a href='https://nextjs.org/' className='hover:underline'>
                  Next
                </a>
              </li>
              <li>
                <a href='https://tailwindcss.com/' className='hover:underline'>
                  Tailwind
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-highlight uppercase'>
              Follow us
            </h2>
            <ul className='text-accent'>
              <li className='mb-4'>
                <a
                  href='https://github.com/myorganizationnamesthis/hackutd-nextjs'
                  className='hover:underline '
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href='https://ix.hackutd.co/discord'
                  className='hover:underline'
                >
                  Discord
                </a>
              </li>
            </ul>
          </div> */}
          <div>
            <h2 className='mb-3 text-sm font-semibold text-highlight uppercase'>
              Legal
            </h2>
            <ul className='text-accent'>
              <li className='mb-3'>
                <a href='https://www.smu.edu/' target="_blank" rel="noreferrer noopener" className='hover:underline'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='https://www.smu.edu/' target="_blank" rel="noreferrer noopener" className='hover:underline'>
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='my-5 border-' />
      <div className='sm:flex sm:items-center sm:justify-between mt-6'>
        <span className='text-sm text-accent sm:text-center'>
          © SOUTHERN METHODIST UNIVERSITY
        </span>
      </div>
    </footer>
  )
}
