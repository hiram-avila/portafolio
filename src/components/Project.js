import Image from 'next/image';


const Project = ({ projecto }) => {
    return (
        <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
            <div className="w-full md:w-1/2">
                <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <div className="w-full h-96 sm:h-full overflow-hidden">
                        <Image
                            alt="Recién llegado vs 5 años en Nueva Zelanda"
                            className="object-cover w-full h-full"
                            loading="lazy"
                            src={projecto.img}
                            width={500}
                            height={500}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
                <div className=" flex justify-center bg-slate-400 rounded-sm mt-2">

                    <p>visita</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 md:max-w-lg">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">SVGL - A beautiful library with SVG logos</h3>
                <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                        <li>
                            <span className="flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2 ">
                                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="256" height="256" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">

                                    <mask id="b" fill="#fff">
                                        <use xlinkHref="#a"></use>
                                    </mask>
                                    <g mask="url(#b)">
                                        <circle cx="128" cy="128" r="128"></circle>
                                        <path fill="url(#c)" d="M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"></path>
                                        <path fill="url(#d)" d="M163.556 76.8h17.067v102.4h-17.067z"></path>
                                    </g>
                                </svg>
                                Next.js
                            </span>
                        </li>
                        <li>
                            <span className="flex gap-x-2 rounded-full text-xs bg-[#003159] text-white py-1 px-2 ">
                                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
                                    <g clipPath="url(#a)">
                                        <path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd"></path>
                                    </g>

                                </svg>
                                Tailwind CSS
                            </span>
                        </li>
                    </ul>
                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                        Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                        <a href="https://github.com/pheralb/svgl" role="link" className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">
                            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                            </svg>
                            Code
                        </a>
                        <a href="https://svgl.vercel.app/" role="link" className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                            </svg>
                            Preview
                        </a>
                    </footer>
                </div>
            </div>
        </article>

    )
}

export default Project