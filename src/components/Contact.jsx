'use client'

import Heading from "./sub/Heading"
import Image from "next/image"
import { motion } from "framer-motion"
import ContactForm from "./sub/ContactForm"


const Contact = () => {
  return (
    <div id="contact" className="h-screen lg:h-auto py-20 lg:py-40">
        <Heading text={"Get in touch"} />
        <div className="w-full h-full my-auto flex lg:flex-col items-center justify-between lg:justify-center lg:gap-x-0 gap-y-20 lg:gap-y-10">
          <motion.div initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .4 }} viewport={{ once: true }} className="w-[500px] lg:w-[400px] sm:w-full">
            <Image src="/contact/contact me-2.webp" alt="contact me if you have any question" className="w-[400px] lg:w-[300px] rounded-md" width={400} height={400}/>
                
          </motion.div>
          <ContactForm />
        </div>
    </div>
  )
}

export default Contact