import { Course } from "@/interfaces";

export const categories = [
    {
        id: '1',
        image: '',
        name: 'Marketing y ventas digitales',
        
    },
    {
        id: '2',
        image:'',
        name: 'Emprendimiento y comercio',
    },
    {
        id: '3',
        image:'',
        name: 'Administración',    
    },

    
]

export const courses = [
        {
            id: '1',
            img: './public/imgs/cursos-presenciales.jpg',
            name: 'Técnicas para la venta y habilidades comerciales',
            hours: 40,
            categoryId: '1',
            init_date: '27-09-2024',
            end_date: '10-10-2024',
            estado: false
        },
        {
            id: '2',
            img: './public/imgs/cursos-presenciales.jpg',
            name: 'Plan de márketing para dispositivos móviles',
            hours: 30,
            categoryId: '1',
            init_date: '11-10-2024',
            end_date: '24-10-2024',
            estado: false
        },
        {
            id: '3',
            img: './public/imgs/cursos-presenciales.jpg',
            name: 'Gestión de las redes sociales en la empresa',
            hours: 50,
            categoryId: '1',
            init_date: '25-10-2024',
            end_date: '14-11-2024',
            estado: true
        },
        {
            id: '4',
            img: './public/imgs/cursos-semipresenciales.jpg',
            name: 'Tienda virtual y gestión del comercio electrónico',
            hours: 35,
            categoryId: '2',
            init_date: '03-10-2024',
            end_date: '16-10-2024',
            estado: false
        },
        {
            id: '5',
            img: './public/imgs/cursos-semipresenciales.jpg',
            name: 'Atención y venta a establecimientos comerciales',
            hours: 30,
            categoryId: '2',
            init_date: '19-09-2024',
            end_date: '02-10-2024',
            estado: false
        },
        {
            id: '6',
            img: './public/imgs/cursos-semipresenciales.jpg',
            name: 'Asesoramiento para la creación de empresas',
            hours: 30,
            categoryId: '2',
            init_date: '19-09-2024',
            end_date: '02-10-2024',
            estado: true
        },
        {
            id: '7',
            img: './public/imgs/cursos-semipresenciales.jpg',
            name: 'Nóminas y seguridad social I',
            hours: 30,
            categoryId: '3',
            init_date: '04-11-2024',
            end_date: '14-11-2024',
            estado: true
        },
        {
            id: '8',
            img: './public/imgs/cursos-online.jpg',
            name: 'Nóminas y seguridad social II',
            hours: 30,
            categoryId: '3',
            init_date: '15-11-2024',
            end_date: '26-11-2024',
            estado: true
        }

]