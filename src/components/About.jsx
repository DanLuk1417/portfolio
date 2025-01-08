'use client'

import Heading from "./sub/Heading"
import Image from "next/image"
import { aboutText, downloadIcon } from "@/assets"

const About = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col items-center justify-center">
        <Heading text={'About me'}/>
        <div className="w-full flex items-center justify-between md:justify-center">
            <Image src={'/about/about.png'} alt="Here image describe me and tell you about me" width={400} height={400} className="w-[300px] lg:w-[200px] mr-10 md:hidden"/>
            <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify dark:bg-zinc-900 transition-colors">
                <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px] dark:text-white transition-colors">{aboutText}</p>
                <a href="/about/Danijela Divjak.pdf" download="" className="w-max flex items-center gap-x-2 mt-6 rounded-full border-gray-30 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors">
                    <span>Download CV</span>
                    <span className="text-xl">{downloadIcon}</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default About