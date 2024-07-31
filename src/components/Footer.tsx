'use client'

import { logoWhite } from '@/assets'
import { IconMail, IconPhone } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-36 py-12 flex flex-col lg:flex-row gap-12 bg-primary-600 text-white">
      <div className="lg:border-r lg:border-white/40 shrink-0 pr-12">
        <div className="text-2xl font-semibold pb-3 select-none">
          <Image src={logoWhite} alt="logo" height={52} />
        </div>
        <div className="text-sm font-light flex gap-2 pb-4">
          <span>대구광역시 달서구 XXX로 XXX, 2층</span>
          <span className="text-white/50">|</span>
          <span>사업자등록번호: 000-00-00000</span>
        </div>

        <div className="pb-4 flex flex-col gap-1 text-sm">
          <div className="flex gap-2 items-center">
            <IconMail size={20} strokeWidth={1.25} />
            <a href="mailto:support@mercuryapp.com" className="hover:underline">
              me@arpaap.dev
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <IconPhone size={20} strokeWidth={1.25} />
            <a href="tel:053-000-0000" className="hover:underline">
              053-000-0000
            </a>
          </div>
        </div>

        <div className="text-sm font-light">
          © {new Date().getFullYear()} Mealog All rights reserved.
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 justify-between w-full">
        <div className="col-span-1 pb-6">
          <div className="pb-2">ABOUT</div>
          <Link href="/" className="text-sm font-light pb-1">
            서비스 소개
          </Link>
          <div className="text-sm font-light pb-1">공지사항</div>
        </div>
        <div className="col-span-1 pb-6">
          <div className="pb-2">SERVICES</div>
          <div className="text-sm font-light pb-1">게시판</div>
        </div>
        <div className="col-span-1 pb-6">
          <div className="pb-2">POLICIES</div>
          <div className="text-sm font-light pb-1">개인정보 처리방침</div>
          <div className="text-sm font-light pb-1">이용약관</div>
          <div className="text-sm font-light pb-1">법적 고지</div>
        </div>
      </div>
    </footer>
  )
}
