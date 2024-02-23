import React from 'react'

function ExperienciaLaboral() {
    return (
        <div className="">

            <h2 className="flex items-center mb-10 text-3xl font-semibold gap-x-2 text-black/80 dark:text-white">
                <svg
                    className="size-8"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
                    <path d="M12 12l0 .01"></path>
                    <path d="M3 13a20 20 0 0 0 18 0"></path>
                </svg>
                Experiencia laboral
            </h2>

            <div className="space-y-6 border-l-2 border-dashed mt-6">
                <div className="relative flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute left-0 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
                        <circle cx="12" cy="12" r="9" fill="#28BF78" />
                    </svg>
                    <div className="ml-6">
                        <h2 className="font-bold text-customGreen text-xl">Frontend Development.</h2>
                        <p className="mt-2 text-sm text-white">Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</p>
                        <span className="mt-1 block text-sm font-semibold text-orange-400">2007</span>
                    </div>
                </div>

                {/* Segundo elemento de experiencia */}
                <div className="relative flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute left-0 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
                        <circle cx="12" cy="12" r="9" fill="#28BF78" />
                    </svg>
                    <div className="ml-6">
                        <h2 className="font-bold text-customGreen text-xl">Frontend Development.</h2>
                        <p className="mt-2 text-sm text-white">Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</p>
                        <span className="mt-1 block text-sm font-semibold text-orange-400">2007</span>
                    </div>
                </div>

                {/* Tercer elemento de experiencia */}
                <div className="relative flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute left-0 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
                        <circle cx="12" cy="12" r="9" fill="#28BF78" />
                    </svg>
                    <div className="ml-6">
                        <h2 className="font-bold text-customGreen text-xl">Frontend Development.</h2>
                        <p className="mt-2 text-sm text-white">Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</p>
                        <span className="mt-1 block text-sm font-semibold text-orange-400">2007</span>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default ExperienciaLaboral