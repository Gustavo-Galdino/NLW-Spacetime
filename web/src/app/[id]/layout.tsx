import { ReactNode } from 'react'
import { Copyright } from '@/components/Copyright'
import Image from 'next/image'
import nlwLogo from '@/assets/nlw-spacetime-logo.svg'
import Link from 'next/link'
import { Avatar } from '@/components/Avatar'

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo construída com React, Next.js, TailwindCSS e Typescript.',
}

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main className="absolute left-0 top-0 grid min-h-screen grid-cols-2 bg-gray-900 max-md:flex max-md:flex-col">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16 max-md:flex-row max-md:gap-4 max-md:px-6 max-md:py-6 max-sm:gap-10 max-sm:pb-12">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        <Avatar />

        <div className="space-y-5 max-md:space-y-0 max-sm:flex max-sm:items-center max-sm:justify-around">
          <Image
            src={nlwLogo}
            alt="NLW Spacetime"
            className="max-sm:h-2/5 max-sm:w-2/5 max-sm:self-start"
          />

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50 max-md:text-2xl max-sm:invisible max-sm:h-0">
              Minha cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed max-md:invisible max-md:h-0">
              Minha jornada para se tornar programador 😎
            </p>
          </div>

          <div className="flex items-center gap-4 max-sm:mr-6 max-sm:flex-col">
            <Link
              className="text-max-md inline-block rounded-full bg-sky-500 px-5 py-3 font-alt uppercase leading-none text-black hover:bg-sky-600 max-sm:py-1 max-sm:text-xs"
              href="https://www.linkedin.com/in/gustavo-galdinom/"
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link
              className="text-max-md inline-block rounded-full bg-green-500 px-5 py-3 font-alt uppercase leading-none text-black hover:bg-green-600 max-sm:py-1 max-sm:text-xs"
              href="https://github.com/Gustavo-Galdino"
              target="_blank"
            >
              Github
            </Link>
          </div>
        </div>
        <Copyright />
      </div>

      {/* Right */}
      <div className="flex max-h-screen flex-col overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover">
        {children}
      </div>
    </main>
  )
}
