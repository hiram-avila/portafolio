import captura1 from '../../public/assets/captura1.jpg'
import Image from 'next/image';


const Project = ({ projectos }) => {
    return (
        <div className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white ">
            <div className="flex flex-col relative mr-10 pr-12">
                <div className="w-full h-auto rounded-lg overflow-hidden mb-2">
                    <Image
                        src={projectos.img}
                        alt=""
                        className="w-full h-auto rounded-lg hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
                        width={300}
                        height={200}
                    />
                </div>
                <a href="#" className="text-white bg-gray-700 hover:bg-black px-4 py-1 rounded-lg" target="_blank" rel="noopener noreferrer">wiseshot.io</a>
                <div className="absolute bottom-0 right-0 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8 mx-1 hover:scale-110 transition duration-100 ease-in-out cursor-pointer">
                        <path d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8 mx-1 hover:scale-110 transition duration-100 ease-in-out cursor-pointer">
                        <path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                </div>
            </div>

            <div>
                hola
            </div>
        </div>

    )
}

export default Project