import { Course } from "@/interfaces";

export const categories = [
    {
        id: '1',
        image: '',
        name: 'Marketing y ventas digitales',

    },
    {
        id: '2',
        image: '',
        name: 'Emprendimiento y comercio',
    },
    {
        id: '3',
        image: '',
        name: 'Administración',
    },


]

const consorciEmpleados = ["Empleados", "Cataluña", "Presencial"]
const consorciDesempleados = ["Desempleados", "Cataluña", "Presencial"]




export const courses = [
    {
        id: '1',
        img: './public/imgs/cursos-online.jpg',
        codigo: "MF0345_1",
        name: 'Depilación mecánica y decoloración del vello',
        hours: 90,
        init_date: new Date('20-11-2024'),
        end_date: new Date('11-12-2024'),
        requirements: consorciEmpleados,
        estado: true
    }
]