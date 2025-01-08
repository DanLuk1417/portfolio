'use client'

import Image from "next/image"
import { heroIcons } from "@/assets"
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion"
import { useState } from "react"

const Hero = () => {

    const [windowOffset, setWindowOffset] = useState({ innerWidth: 0, innerHeight: 0 })
    const [mouseMove, setMouseMove] = useState(false)

    const [buttonHover, setButtonHover] = useState(false)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e
        x.set(clientX)
        y.set(clientY)

        //console.log(clientX, clientY, x, y)
    }

    const handleMouseEnter = () => {
        setWindowOffset({ innerWidth: window.innerWidth, innerHeight: window.innerHeight })
        setMouseMove(true)

        //console.log(innerWidth, innerHeight)
    }

    const { innerWidth, innerHeight } = windowOffset

    const xSpring = useSpring(x, { stiffness: 100, damping: 10 })
    const ySpring = useSpring(y, { stiffness: 100, damping: 10 })

    const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30])
    const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50])

  return (
    <div id="home" className="h-screen grid place-items-center" 
        onMouseMove={handleMouseMove} 
        onMouseEnter={handleMouseEnter} 
        >
        <div>
            <div className="flex flex-col item-center justify-center gap-y-3 font-light capitalize">
                <motion.div className="flex item-center justify-center" style={{ rotateX:mouseMove ? rotateX : 0, rotateY: mouseMove ? rotateY: 0, transition: '0.1s' }}>
                    <Image 
                        src={'/about/hero-image.webp'} 
                        alt="Astronaut" 
                        width={400} 
                        height={400} 
                        priority={true} 
                        className="h-auto w-[250px]"
                        />
                    <motion.span className="absolute text-3xl font-semibold text-black dark:text-white transition-colors" initial={{ scale: 0 }}animate={{ opacity: buttonHover ? 0 : 1, scale: buttonHover ? 2: 0, y: buttonHover ? -40 : 0}} transition={{ opacity: { delay: 0.4}}}>Hi</motion.span>
                </motion.div>
                <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl dark:text-white transition-colors">My name is Danijela Divjak &</h1>
                <p className="text-lg tracking-wider text-gray-700 ml-28 sm:ml-9 dark:text-gray-400 transition-colors sm:text-[15px]">I like to work with people.<Image src={'/about/smile.png'} alt="Smile" width={50} height={50} className="h-auto w-[50px] inline sm:h-auto sm:w-[30px]" /></p>
                
            </div>
            <div className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-300 sm:text-2xl">
                {heroIcons.map((icon, i) =>(
                    <a href="https://www.linkedin.com/in/danijela-divjak-8aba2b1b2/" key={i} className="rounded-lg hover:bg-red-400 hover:text-white transition-colors mt-[-25px]">{icon}</a>
                ))}
                
            </div>
            <a href="#" className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors" onMouseEnter={() => setButtonHover(true)} onMouseLeave={()=> setButtonHover(false)}>Talk to me</a>
        </div>
    </div>
  )
}

export default Hero