import Image from 'next/image'
import logo from '@/aseets/logo.png'

export default function HomePage() {
  return (
    <>
      <div className="container max-w-screen-xl h-screen mx-auto px-4 py-24">
        <div className="flex items-center gap-12 h-full">
          <div className="w-1/2">
            <Image src={logo} alt="logo" />
            <div className="py-8 text-2xl font-light">
              모두의 건강한 식사를 위한 영양 분석 및 식단 추천 서비스
            </div>

            <div>로그인하여 건강한 식습관 관리를 시작하세요!</div>
          </div>
          <div className="w-1/2 p-12 h-full bg-white/50 rounded-xl shadow-xl">
            <div className="flex justify-center">
              <Image src={logo} alt="logo" className="w-24" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
