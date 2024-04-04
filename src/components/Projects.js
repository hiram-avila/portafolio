import Image from 'next/image';
import captura1 from '../../public/assets/captura1.jpg'
import Project from './Project';

const Projects = () => {

    const projectos = [{
        
    }]


    return (
        <div className="w-full border-4 border-red-500 grid grid-cols-3"  id="proyectos">
         
            <Project />
        </div>
    )
}

export default Projects