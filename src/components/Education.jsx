'use client'

import Heading from "./sub/Heading"
import Image from "next/image"
import { educationData, arrowIcons } from "@/assets"
import { useRef, useState, useEffect } from "react"
import { animate, motion } from "framer-motion"


const Education = () => {

    const [ index, setIndex ] = useState(0)
    const [direction, setDirection] = useState(false)
    const prevIndex = useRef(0)
    const slides = useRef([])

    const rightClickHandler = () => {
        animate(slides.current[index], {x: 0}, {delay: 0.3})
        animate(slides.current[prevIndex.current], { scale: index === 0 ? 1 : 0.4,
            rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10,
        })
    }

    const leftClickHandler = () => {
        animate(slides.current[index], { scale: 1, rotate: 0 }, {delay: 0.2})
        animate(slides.current[prevIndex.current], { x: '100%' })
    }

    useEffect(() => {
        direction ? leftClickHandler() : rightClickHandler()
        prevIndex.current = index
    }, [index])

  return (
    <div id="education" className="my-20">
        <Heading text={ 'Education' } />
        <div className="flex flex-col items-center justify-center">
            <motion.div initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0}} viewport={{ once: true }} transition={{ duration: 0.4 }} className="relative w-[800px] lg:w-[600] md:w-[95%] sm:w-[280px] h-[500px] lg:h-[450px] md:h-[400px] sm:h-[600px] flex items-center justify-center overflow-hidden">
                {educationData.map((education, i) => (
                    <motion.div initial={{ x: '100%'}} key={i} className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4 border border-yellow-500 bg-zinc-50 p-14 lg:p-5 rounded-xl dark:bg-zinc-900 dark:border-red-300" ref={(el) => slides.current.push(el)}>
                        <Image src={education.image} alt="365 Data Science" width={130} height={130} className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain"/>
                        <h2 className="text-2xl md:text-xl text-center tracking-wider text-yellow-600">{education.school}</h2>
                        <p className="text-lg md:text-sm text-justify font-extralight tracking-wider text-gray-600 first-letter:pl-2 dark:text-gray-100">{education.degree}</p>
                        <div className="flex flex-col items-center justify-center gap-y-2">
                            <span className="text-lg font-light text-yellow-600 mr-3">{education.year}</span>
                        </div>
                    </motion.div>
                ))}
                
            </motion.div>
            <div className="flex gap-x-4 text-4xl text-yellow-500 mt-5">
                <button className={`${index === 0 ? "opacity-30 pointer-events-none" : "opacity-100 pointer-events-auto dark:text-red-300"} hover:scale-150 transition-all dark:text-red-300`} onClick={() => {setDirection(true); setIndex(index - 1)}}>{arrowIcons[0]}</button>
                <button className={`${index === educationData.length - 1 ? "opacity-30 pointer-events-none" : "opacity-100 pointer-events-auto dark:text-red-300"} hover:scale-150 transition-all`} onClick={() => {setDirection(false); setIndex(index + 1)}}>{arrowIcons[1]}</button>
            </div>
        </div>
    </div>
  )
}

export default Education;