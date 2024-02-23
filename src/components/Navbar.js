import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-custom2 fixed w-full top-0 z-10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    
                    <ul className="flex flex-col p-1 bg-transparent  mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
                        <li>
                            <a href="#" className="transition-colors duration-500 ease-in-out block text-lg py-3 px-4  rounded  text-white hover:text-orange-500 md:p-0    md:dark:hover:bg-transparent " aria-current="page">Experiencia</a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors duration-500 ease-in-out block text-lg py-3 px-4  rounded  text-white hover:text-orange-500 md:p-0    md:dark:hover:bg-transparent ">Proyectos</a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors duration-500 ease-in-out block text-lg py-3 px-4  rounded  text-white hover:text-orange-500 md:p-0    md:dark:hover:bg-transparent ">Sobre mi</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar