import { modalidad } from "@/interfaces";

export const categories: modalidad[] = [
    {
        id: '1',
        //img: './public/imgs/cursos-presenciales.jpg',
        name: 'Presencial',
        courses: 7,
        redirect: 'https://studyfp.com/cursos/cursos-presenciales/',
    },
    {
        id: '2',
        //img: './public/imgs/cursos-semipresenciales.jpg',
        name: 'Semipresencial',
        courses: 2,
        redirect: 'https://studyfp.com/cursos/cursos-semipresenciales/',

    },
    {
        id: '3',
        //img: './public/imgs/cursos-online.jpg',
        name: 'Virtual',
        courses: 24,
        redirect: 'https://studyfp.com/cursos/cursos-telematicos/',
    }
]