'use client'

import Heading from "./sub/Heading"
import { skillsData } from "@/assets"
import { motion } from "framer-motion"


const Skills = () => {

  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.07,
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    }),
    hidden: { 
      opacity: 0, 
      y: 30, 
    },
  }


  return (
    <div id="skills" className="min-h-screen flex flex-col items-center justify-center gap-y-20">
        <Heading text={ "Skills" } />
        <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
          {skillsData.map((item, i) =>(
            <motion.div
            custom={i}
            variants={variants} 
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.1 }}
            viewport={{ margin: '50px', once: true }}
            key={i} className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 px-5 py-2 lg:px-2  dark:bg-zinc-900 dark:text-gray-100  dark:border-red-300 transition-colors">
            <p className="text-sm text-grey-600">{item.name}</p>
          </motion.div>
          ))}
          
        </div>
    </div>
  )
}

export default Skills