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
const consorciSectorial = ["Empleados", "Virtual"]
//const consorciDesempleados = ["Desempleados", "Cataluña", "Presencial"]




export const courses: course[] = [
    {
        id: '1',
        img: '/imgs/cursos/depilacion_mecanica/depilacion_mecanica.webp',
        codigo: "MF0345",
        name: 'Depilación mecánica y decoloración del vello',
        hours: 90,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: '20-11-2024',
        end_date: '11-12-2024',
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
        init_date: '09-12-2024',
        end_date: '20-12-2024',
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
        init_date: '23-12-2024',
        end_date: '16-01-2025',
        requirements: socAda,
        estado: true
    },
    {
        id: '4',
        img: '/imgs/cursos/sectorial/sectorial-cliente-ingles.webp',
        codigo: "COMT0013",
        name: 'Atención al cliente del pequeño comercio en lengua extranjera, Inglés',
        hours: 30,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "Por definir",
        end_date: "Por definir",
        requirements: consorciSectorial,
        estado: true
    },
    {
        id: '5',
        img: '/imgs/cursos/sectorial/sectorial-neuromarketing.webp',
        codigo: "COMM0014",
        name: 'Neuromarketing curso virtual para empleados',
        hours: 35,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "Por definir",
        end_date: "Por definir",
        requirements: consorciSectorial,
        estado: true
    },
    {
        id: '6',
        img: '/imgs/cursos/sectorial/sectorial-ventas-comerciales.webp',
        codigo: "COMT0017",
        name: 'Atención y venta en establecimientos comerciales',
        hours: 30,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "Por definir",
        end_date: "Por definir",
        requirements: consorciSectorial,
        estado: true
    },
    {
        id: '7',
        img: '/imgs/cursos/sectorial/sectorial-comercio-exterior.webp',
        codigo: "COMT0015",
        name: 'Gestión del comercio exterior curso virtual',
        hours: 40,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "Por definir",
        end_date: "Por definir",
        requirements: consorciSectorial,
        estado: true
    },
    {
        id: '8',
        img: '/imgs/cursos/sectorial/sectorial-contabilidad-basica.webp',
        codigo: "ADGD0061",
        name: 'Contabilidad básica curso virtual para empleados',
        hours: 60,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "16-12-2024",
        end_date: "04-01-2025",
        requirements: consorciSectorial,
        estado: true
    },
    {
        id: '9',
        img: '/imgs/cursos/sectorial/sectorial-contabilidad-avanzada.webp',
        codigo: "ADGD0064",
        name: 'Contabilidad avanzada curso virtual para empleados',
        hours: 40,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "05-01-2025",
        end_date: "23-01-2025",
        requirements: consorciSectorial,
        estado: true
    },
    {
        id: '10',
        img: '/imgs/cursos/sectorial/sectorial-gestion-tesoreria.webp',
        codigo: "ADGD0026",
        name: 'Gestión de tesoreria curso virtual para empleados',
        hours: 60,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "Por definir",
        end_date: "Por definir",
        requirements: consorciSectorial,
        estado: true
    },
    {
        id: '11',
        img: '/imgs/cursos/foap/foap-direcció-cordinació-infantil-lleure.webp',
        codigo: "SSCB0211",
        name: 'Dirección/coordinación de actividades de educación en el ocio infantil',
        hours: 290,
        entidad_subvencion: "/imgs/logos/logo-socs.svg",
        init_date: "Por definir",
        end_date: "Por definir",
        requirements: socAda,
        estado: true
    },
    {
        id: '12',
        img: '/imgs/cursos/foap/foap-atenció-sociosanitaria-domicili.webp',
        codigo: "SSCS0108",
        name: 'Atención sociosanitaria a personas en el domicilio',
        hours: 480,
        entidad_subvencion: "/imgs/logos/logo-socs.svg",
        init_date: "25-02-2025",
        end_date: "16-07-2025",
        requirements: socAda,
        estado: true
    },
    {
        id: '13',
        img: '/imgs/cursos/foap/foap-gestión-llamadas-teleasistencia.webp',
        codigo: "SSCG0111",
        name: 'Gestión de llamadas de teleasistencia',
        hours: 230,
        entidad_subvencion: "/imgs/logos/logo-socs.svg",
        init_date: "27-06-2025",
        end_date: "Por definir",
        requirements: socAda,
        estado: true
    },
    {
        id: '14',
        img: '/imgs/cursos/consorci/depilacion_mecanica.webp',
        codigo: "MF0345",
        name: 'Depilación mecánica y decoloración del vello',
        hours: 90,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "14-01-2025",
        end_date: "04-02-2024",
        requirements: consorciEmpleados,
        estado: true
    },
    {
        id: '15',
        img: '/imgs/cursos/consorci/masaje-estético-manual-mecánico.webp',
        codigo: "MF0063",
        name: 'Masaje estético manual y mecánico para empleados',
        hours: 90,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "07-05-2025",
        end_date: "10-06-2025",
        requirements: consorciEmpleados,
        estado: true
    },
    {
        id: '16',
        img: '/imgs/cursos/consorci/diagnostico-protocolos-masajes-esteticos-tecnicas-sensoriales.webp',
        codigo: "MF0789",
        name: 'Diagnóstico y protocolos para masajes estéticos y técnicas sensoriales',
        hours: 90,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "07-04-2025",
        end_date: "06-05-2025",
        requirements: consorciEmpleados,
        estado: true
    },
    {
        id: '17',
        img: '/imgs/cursos/consorci/aplicación-cosméticos-para-cambios-color-cabello.webp',
        codigo: "MF0060",
        name: 'Aplicación de cosméticos para los cambios de color del cabello',
        hours: 80,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "01-04-2025",
        end_date: "20-05-2025",
        requirements: consorciEmpleados,
        estado: true
    },
    {
        id: '18',
        img: '/imgs/cursos/consorci/análisis-cuero-cabelludo-cabello-protocolos-trabajos-técnicos-curas-capilares.webp',
        codigo: "MF0347",
        name: 'Análisis del cuero cabelludo y cabello protocolos de trabajos técnicos',
        hours: 90,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "09-04-2025",
        end_date: "16-05-2025",
        requirements: consorciEmpleados,
        estado: true
    },
    {
        id: '19',
        img: '/imgs/cursos/consorci/emisión-gestión-llamadas-salientes-en-un-servicio-teleasistencia.webp',
        codigo: "MF1424",
        name: 'Emisión y gestión de llamadas salientes en un servicio de teleasistencia',
        hours: 60,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "28-03-2025",
        end_date: "22-04-2025",
        requirements: consorciEmpleados,
        estado: true
    },
    {
        id: '20',
        img: '/imgs/cursos/consorci/manejo-herramientas-técnicas-habilidades-para-prestar-servicio-teleasistencia.webp',
        codigo: "MF1425",
        name: 'Manejo de las herramientas, técnicas y habilidades para prestar el servicio de teleasistencia',
        hours: 80,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "23-04-2025",
        end_date: "22-05-2025",
        requirements: consorciEmpleados,
        estado: true
    },



    

]