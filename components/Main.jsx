import { ParallaxText } from './ParallaxText'

export function Main() {
  return (
    <div className='h-full bg-gray-100'>
      {/* <!-- Scroll wrapper --> */}
      <div className='flex-1 flex overflow-hidden'>
        {/* <!-- Scrollable container --> */}
        <div className='flex-1 overflow-y-scroll'>
          {/* <!-- Your content --> */}
          <section className="overflow-clip">
            <ParallaxText description={'Login'} start={600} side={2} url={'/conneqt_card_1.png'} width={800} height={100}></ParallaxText>
            <ParallaxText description={'Apply'} start={600} side={-2} url={'/conneqt_card_2.png'} width={290} height={100}></ParallaxText>
            <ParallaxText description={'Search'} start={600} side={2} url={'/conneqt_card.png'} width={800} height={100}></ParallaxText>
          </section>
        </div>
      </div>
      {/* <!-- Fixed sidebar --> */}
      <div className='bg-primary w-1/2'>{/* <!-- Sidebar content --> */}</div>
    </div>
  )
}
