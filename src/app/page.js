'use client'

import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skills";
import Toggle from "@/components/sub/Toggle";
import { useEffect, useRef, useState } from "react";


export default function Home() {

  const [id, setId] = useState(0)
  const compsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const intersecting = entry.isIntersecting
          if(intersecting){
            setId(entry.target.id)
          }
        })
      },
      {threshold: 0.3},
    )

    const compsArr = Array.from(compsRef.current.children)
    compsArr.forEach((comp) => {
      observer.observe(comp)
    })

  },[])


  return (

    <>

      <Toggle>
        <Navbar id={id}/>
        <div className='w-min' ref={compsRef}>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skill />
          <Contact />   
        </div>
      </Toggle>
      
    </>
    
  );
}
