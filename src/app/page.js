
import Image from 'next/image'

import ExperienciaLaboral from '@/components/ExperienciaLaboral';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import SectionMotion from '@/components/SectionMotion';

export default function Home() {

  return (
    <>
      <div className="  bg-gradient-to-tl from-cyan-950 to-stone-800">
            < Navbar />
          <div v className="w-full ">
            <SectionMotion />

          <div className="mt-16 w-full flex justify-center items-center">
            <ExperienciaLaboral />
          </div >

          <div className="mt-16 w-full border border-blue-300">
            <Projects />
          </div>

         </div>
      </div>
    </>
  )
}
