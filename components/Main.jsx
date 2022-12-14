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
            <ParallaxText description={'Apply'} start={600} side={-2} url={'/application'}></ParallaxText>
            <ParallaxText description={'Create'} start={600} side={2} url={'positionForm'}></ParallaxText>
          </section>
        </div>
      </div>
    </div>
  )
}
