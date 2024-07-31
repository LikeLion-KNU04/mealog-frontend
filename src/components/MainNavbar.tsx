'use client'

import Image from 'next/image'
import Link from 'next/link'
import { IconSearch, IconBell } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import { logo } from '@/assets'

export default function MainNavbar() {
  return (
    <div className="fixed border-b border-black/[7%] top-0 inset-x-0 h-16 bg-white z-[999]">
      <div className="container px-24 mx-auto flex h-full justify-between items-center">
        <div className="flex h-full items-center gap-4">
          <Link href="/main">
            <Image priority src={logo} alt="" height={32} />
          </Link>

          <div className="flex h-full pt-5 gap-6 px-2 text-[15px]">
            <NavLink href="/board" name="게시판" />
            <NavLink href="/myquestions" name="마켓" />
            <NavLink href="/mypicks" name="내 식습관" />
          </div>
        </div>

        <div className="flex h-full items-center gap-5 px-2 text-sm">
          <div className="flex gap-4 items-center text-black/75">
            <Link href="/login">
              <IconSearch size={20} />
            </Link>
            <Link href="/notifications">
              <IconBell size={20} />
            </Link>
          </div>
          <div className="h-4 border-r border-black/20" />
          <Link href="/login">로그인</Link>
          <Link href="/login">
            <button
              type="button"
              className="bg-primary-600 text-white rounded-xl px-3.5 py-1.5"
            >
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

interface NavLinkProps {
  href: string
  name: string
}

export function NavLink({ href, name }: NavLinkProps) {
  const pathname = usePathname()

  const isActive = pathname.startsWith(href)

  return (
    <div
      className={classNames(
        isActive ? 'border-b-2 border-primary-600 font-bold' : 'font-medium'
      )}
    >
      <Link
        href={href}
        className={classNames(
          isActive
            ? 'text-primary-600'
            : 'hover:text-primary-600 transition-all duration-200'
        )}
      >
        {name}
      </Link>
    </div>
  )
}
