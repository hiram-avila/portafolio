import Image from 'next/image';
import Project from './Project';
import TrabajoComponente from './TrabajoComponente';
import cine1 from '../../public/assets/projects/cine1.webp'
import captura4 from '../../public/assets/projects/captura4.webp'

const Projects = () => {

    const projectos = [
        {
            title: "cine-React",
            img: captura4,
            description: `Este proyecto es una`,
        },
        {
            title: "cine-React",
            img: cine1,
            description: `Este proyecto es una`,
        },
        {
            title: "cine-React",
            img: cine1,
            description: `Este proyecto es una`,
        },

        {
            title: "cine-React",
            img: cine1,
            description: `Este proyecto es una`,
        }
    ]
    return (
        <div className="max-w-7xl " id="proyectos">
            <h2 className="flex items-center mb-10 ml-20 text-3xl font-semibold gap-x-2 text-black/80 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-8 h-8">
                    <path fill="#ffffff" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                </svg>
                Proyectos</h2>
                
            <div className="mt-16 w-full grid grid-cols-2 gap-24 max-w-full">
                {projectos.map((projecto, index) => (  
                    <Project key={projecto.title} projecto={projecto} className="mb-10 w-full" />
                ))}
            </div>
        </div>

    );

}

export default Projects
