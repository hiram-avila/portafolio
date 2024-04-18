'use client'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import React from 'react';
import TrabajoComponente from './TrabajoComponente';

function ExperienciaLaboral() {
    const trabajos = [
        {
            puesto: "Fullstack jr",
            empresa: "Framelova",
            description: " Creación y mantenimiento de la interfaz de usuario de la aplicacion web, desarrollé elementos visuales y funciones que mejoraron la experiencia del usuario, haciéndola más intuitiva.",
            tecnologias:" Manejé tecnologias como React, Tailwind y docker principalmente",
            year: "03/2023 - 01/2024"
        },
        {
            puesto: "Frontend Development",
            empresa: "softwareLand",
            description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
            tecnologias:" Manejé tecnologias como React, Tailwind y docker principalmente",
            year: "2007"
        },
        {
            puesto: "Frontend Development",
            empresa: "softwareLand",
            description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
            tecnologias:" Manejé tecnologias como React, Tailwind y docker principalmente",
            year: "2007"
        }
    ];

    return (
            <div className="" > 
                <h2 className="flex items-center mb-10 text-3xl font-semibold gap-x-2 text-black/80 dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 h-8 text-white">
                        <path fill="#fff" d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
                    </svg>

                    Experiencia laboral
                </h2>
                <div className="max-w-4xl" >
                    {trabajos.map((trabajo, index) => (
                        <div key={index}>
                                <TrabajoComponente key={trabajo.title} trabajo={trabajo} />
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default ExperienciaLaboral;