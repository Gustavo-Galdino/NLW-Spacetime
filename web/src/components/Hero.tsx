import Image from 'next/image'

import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="space-y-5 max-md:space-y-0 max-sm:flex max-sm:items-center max-sm:justify-around">
      <Image
        src={nlwLogo}
        alt="NLW Spacetime"
        className="max-sm:h-2/5 max-sm:w-2/5"
      />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50 max-md:text-3xl max-sm:invisible max-sm:h-0">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed max-md:invisible max-md:h-0">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <Link
        className="text-max-md inline-block rounded-full bg-green-500 px-5 py-3 font-alt uppercase leading-none text-black hover:bg-green-600 max-sm:text-xs"
        href="/memories/new"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  )
}
