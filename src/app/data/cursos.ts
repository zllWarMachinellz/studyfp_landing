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
const socAda = ["Desempleadas", "Mujeres", "Modalidad Mixta"]
const consorciSectorial = ["Empleados", "Vitual"]
//const consorciDesempleados = ["Desempleados", "Cataluña", "Presencial"]




export const courses: course[] = [
    {
        id: '1',
        img: '/imgs/cursos/depilacion_mecanica/depilacion_mecanica.webp',
        codigo: "MF0345",
        name: 'Depilación mecánica y decoloración del vello',
        hours: 90,
        entidad_subvencion: "/imgs/cursos/depilacion_mecanica/consorci.png",
        init_date: new Date('11-20-2024'),
        end_date: new Date('12-11-2024'),
        requirements: consorciEmpleados,
        estado: false
    },
    {
        id: '2',
        img: '/imgs/cursos/ada/ada-informatica.webp',
        codigo: "FCOI13",
        name: 'Iniciación a la informática y en competencias digitales básicas',
        hours: 40,
        entidad_subvencion: "/imgs/logos/logo-socs.svg",
        init_date: new Date('12-09-2024'),
        end_date: new Date('12-20-2024'),
        requirements: socAda,
        estado: true
    },
    {
        id: '3',
        img: '/imgs/cursos/ada/ada-excel.webp',
        codigo: "FCOI27",
        name: 'Aplicación de la hoja de cálculo Excel. Nivel inicial',
        hours: 40,
        entidad_subvencion: "/imgs/logos/logo-socs.svg",
        init_date: new Date('12-23-2024'),
        end_date: new Date('01-16-2025'),
        requirements: socAda,
        estado: true
    },
    {
        id: '4',
        img: '/imgs/cursos/sectorial/sectorial-cliente-ingles.webp',
        codigo: "COMT0013",
        name: 'Atención al cliente del pequeño comercio en lengua extranjera, Inglés',
        hours: 30,
        entidad_subvencion: "/imgs/cursos/depilacion_mecanica/consorci.png",
        init_date: "Proximamente",
        end_date: "Proximamente",
        requirements: consorciSectorial,
        estado: true
    },
    {
        id: '5',
        img: '/imgs/cursos/sectorial/sectorial-neuromarketing.webp',
        codigo: "COMM0014",
        name: 'Neuromarketing curso virtual para empleados',
        hours: 35,
        entidad_subvencion: "/imgs/cursos/depilacion_mecanica/consorci.png",
        init_date: "Proximamente",
        end_date: "Proximamente",
        requirements: consorciSectorial,
        estado: true
    },
    {
        id: '6',
        img: '/imgs/cursos/sectorial/sectorial-ventas-comerciales.webp',
        codigo: "COMT0017",
        name: 'Atención y venta en establecimientos comerciales',
        hours: 30,
        entidad_subvencion: "/imgs/cursos/depilacion_mecanica/consorci.png",
        init_date: "Proximamente",
        end_date: "Proximamente",
        requirements: consorciSectorial,
        estado: true
    },
    {
        id: '7',
        img: '/imgs/cursos/sectorial/sectorial-comercio-exterior.webp',
        codigo: "COMT0015",
        name: 'Gestión del comercio exterior curso virtual',
        hours: 40,
        entidad_subvencion: "/imgs/cursos/depilacion_mecanica/consorci.png",
        init_date: "Proximamente",
        end_date: "Proximamente",
        requirements: consorciSectorial,
        estado: true
    }


]