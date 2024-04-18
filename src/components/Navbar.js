'use client'


const Navbar = () => {
    return (
      <nav className="bg-transparent fixed top-0 z-10 max-w-full w-full transition duration-500 bg-custom2">
        <div className="w-1/4 max-w-lg flex flex-wrap items-center justify-center mx-auto p-3 px-10 rounded-full bg-gray-600 mt-3">
          <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <ul className="flex flex-col  bg-transparent mt-3 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a href="#experiencia" className="transition-colors duration-500 ease-in-out block text-base py-3 px-3 rounded text-white hover:text-orange-500 md:p-0 md:dark:hover:bg-transparent">Experiencia</a>
              </li>
              <li>
                <a href="#proyectos" className="transition-colors duration-500 ease-in-out block text-base py-3 px-3 rounded text-white hover:text-orange-500 md:p-0 md:dark:hover:bg-transparent">Proyectos</a>
              </li>
              <li>
                <a href="#" className="transition-colors duration-500 ease-in-out block text-base py-3 px-3 rounded text-white hover:text-orange-500 md:p-0 md:dark:hover:bg-transparent">Sobre mi</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };


export default Navbar;