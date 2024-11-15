import { course} from "@/interfaces/program/program.interface";

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
//const consorciDesempleados = ["Desempleados", "Cataluña", "Presencial"]




export const courses: course[] = [
    {
        id: '1',
        img: '/imgs/cursos/depilacion_mecanica/depilacion_mecanica.png',
        codigo: "MF0345_1",
        name: 'Depilación mecánica y decoloración del vello',
        hours: 90,
        entidad_subvencion: "/imgs/cursos/depilacion_mecanica/consorci.png",
        init_date: new Date('11-20-2024'),
        end_date: new Date('12-11-2024'),
        requirements: consorciEmpleados,
        estado: true
    },
    {
        id: '2',
        img: '/imgs/cursos/depilacion_mecanica/depilacion_mecanica.png',
        codigo: "MF12125_1",
        name: 'asdasdasdasdasdasd',
        hours: 30,
        entidad_subvencion: "/imgs/cursos/depilacion_mecanica/consorci.png",
        init_date: new Date('11-20-2024'),
        end_date: new Date('12-11-2024'),
        requirements: consorciEmpleados,
        estado: true
    }

]