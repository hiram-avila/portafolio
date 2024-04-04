import Image from 'next/image';
import captura1 from '../../public/assets/captura1.jpg'
import Project from './Project';
import TrabajoComponente from './TrabajoComponente';
import cine1 from '../../public/assets/projects/cine1.webp'

const Projects = () => {

    const projectos = [
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
        },

        {
            title: "cine-React",
            img: cine1,
            description: `Este proyecto es una`, 
        }
    ]

    return (
        <div className=" " id="proyectos">
            <h2 className=" mb-10 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white">Proyectos</h2>
            <div className="mt-16  w-full flex flex-wrap justify-evenly"> {/* Añadido gap-6 para el espacio entre columnas */}
                {projectos.map((projectos, index) => (
                    <div key={index}>
                        <Project key={projectos.title} projectos={projectos} className="mb-10" /> {/* Añadido className con margen inferior */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
