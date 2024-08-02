import { bannerImg, logo, logoWhite } from '@/assets'
import MainLayout from '@/components/MainLayout'
import Image from 'next/image'

export default function MainPage() {
  return (
    <MainLayout>
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          className="object-cover brightness-50 blur-sm scale-105"
          src={bannerImg}
          alt="random"
          fill
        />
        <div className="absolute container mx-auto px-36 inset-0 flex items-center">
          <div className="text-white tracking-tight">
            <div className="font-light text-3xl pb-3">
              모두의 건강한 식사를 위한
            </div>
            <div className="flex items-center gap-4">
              <div className="font-bold text-4xl">
                영양 분석 및 식단 추천 서비스
              </div>
              <Image src={logoWhite} alt="logo" width={120} />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
