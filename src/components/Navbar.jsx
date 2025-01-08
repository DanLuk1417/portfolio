'use client'

import Image from "next/image"
import { navbarData, copyRightIcon } from "@/assets"

const Navbar = ({ id }) => {
  return (
    <div className="w-[70px] h-full fixed left-0 top-0 flex flex-col items-center justify-between font-semibold bg-zinc-100 border-r border-gray-200 px-4 py-10 xl:py-6 z-10 dark:bg-zinc-900">
        <a href="/#home">
            <Image src="/about/logo.png" alt="logo" width={50} height={50} />
            <span className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-fuchsia-500 to-cyan-500">D</span>.<span className="block w-min rotate-90 origin-bottom text-[12px] fonts-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Divjak</span>
            
            
        </a>
        <div className="flex flex-col gap-y-3 xl:gap-y-1 sm:gap-y-2 xs:gap-y-0">
            {navbarData.map((item, i ) => (
                <a href={`/#${item.id}`} key={i} className="group flex flex-col items-center gap-y-2">
                    <span className={`text-2xl group-hover:scale-125 xl:group-hover:scale-115 xs:group-hover:scale-100 transition-all ${item.id === id ? 'text-red-500 scale-110 xl:scale-100 xs:scale-80' : 'text-yellow-600 scale-100 xl:scale-90 xs:scale-70'}`}>{item.icon}</span>
                    <span className={`text-[10px] tracking-wide opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center dark:text-white ${i % 2 === 0 ? "translate-x-2" : "-translate-x-2"} ${item.id === id && "-translate-x-0 opacity-100"}`}>{item.name}</span>
                </a>
            ))}
            
        </div>
        <p className="flex items-center justify-center text-[13px] xs:text-[11px] text-gray-500 mt-6">
            <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left text-[10px] fonts-semibold tracking-wider">{copyRightIcon} 2018 - {new Date().getFullYear()}</span>
        </p>
    </div>
  )
}

export default Navbar