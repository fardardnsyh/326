import {cn} from '@/lib/utils'
import {cell, styles} from '##/index/Grid'

import Image from 'next/image'
import Heading from '#/UI/Heading'

import HeroGridImage from '%/index/hero-grid.svg'
import HeroDeviceImage from '%/index/hero-device.png'

export default function HeroCell() {
  return (
    <div className={cn('relative overflow-hidden', [cell.hero, styles])}>
      <div className="relative z-20 flex flex-col justify-between h-full p-6 pt-5 sm:gap-4 xl:p-5 xl:pt-4 sm:pb-3 sm:text-center">
        <Heading type="h1">
          Ваш <br /> плакат <br /> в вебе
        </Heading>

        <h4 className="text-2xl !leading-tight tracking-normal xl:text-xl sm:text-lg font-book">
          Одностраничный сайт, сочетающий <br className="sm:hidden" /> дизайн плаката и&nbsp;веб-анимацию
        </h4>
      </div>

      <Image className="absolute sm:relative sm:inset-auto sm:scale-110 top-0 z-10 object-cover h-full right-[-290px]" src={HeroDeviceImage} alt="" />
      <Image className="absolute top-0 object-cover w-full h-full" src={HeroGridImage} alt="" />

      <div className="absolute z-10 bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/15 via-black/10 to-[#25252501]"></div>
    </div>
  )
}
