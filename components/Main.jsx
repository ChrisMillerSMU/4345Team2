import { ParallaxText } from './ParallaxText'

export function Main() {
  return (
    <div className='bg-white'>
      {/* <!-- Scroll wrapper --> */}
      <div className='overflow-hidden'>
        {/* <!-- Scrollable container --> */}
        <div className='overflow-y-scroll'>
          {/* <!-- Your content --> */}
          <section className="overflow-clip">
            <ParallaxText description={'Login'} start={600} side={2} url={'/auth'}></ParallaxText>
            <ParallaxText description={'Apply'} start={600} side={-2} url={''}></ParallaxText>
            <ParallaxText description={'Search'} start={600} side={2} url={''}></ParallaxText>
          </section>
        </div>
      </div>
    </div>
  )
}
