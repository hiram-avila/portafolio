'use client'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ExperienciaLaboral from '@/components/ExperienciaLaboral';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';

export default function Home() {

  return (
    <>
      <div className="  bg-gradient-to-tl from-cyan-950 to-stone-800">

        < Navbar />
        <div className="w-full ">
          <section className="py-16 ml-36 flex justify-center items-center max-w-2xl">
            <motion.div
              initial={{ opacity: 1, scale: 0.7 }}
              animate={{ opacity: 1, scale: 0.7 }}
              transition={{ duration: 0 }}
              className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
              <h1 className="text-white mb-4 text-7xl  lg:leading-normal font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-2">
                  ¡Hey! {" "}
                </span>
                <br />
                <TypeAnimation
                    sequence={[
                      " Soy Hiram",
                      10, // Espera de 10 ms antes de continuar
                    ]}
                    wrapper="span"
                    speed={200} // Ralentizar la velocidad de escritura
                    delay={0}
                />
              </h1>
              <p className="text-white text-3xl font-semibold leading-10">
                Más de 5 años de experiencia en el desarrollo de aplicaciones web robustas y escalables.
                {" "} {/* Espacio en blanco aquí */}
                <b className="text-orange-400">Desarrollador Full-stack.</b>
              </p>

              <div className="flex mt-6 ">
                <button className="flex items-center px-4 py-3 bg-customGreen text-white font-bold rounded-2xl text-xl hover:bg-customHover" style={{ letterSpacing: '1px' }}>
                  Contáctame
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </button>

                <button className="flex items-center mx-4 px-4 py-3 bg-customGreen text-white font-bold text-xl rounded-2xl hover:bg-customHover" style={{ letterSpacing: '1px' }}>
                  LinkedIn
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 ml-2">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                  </svg>
                </button>

              </div>
            </motion.div>
          </section>

          <div className="mt-16 w-full flex justify-center items-center">
            <ExperienciaLaboral />
          </div>
                  <Projects/>
        </div>
      </div>
    </>
  )
}
