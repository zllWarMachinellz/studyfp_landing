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
        img: '/imgs/cursos/ada/ada-contenido-digital-basico.webp',
        codigo: "[FCOI15_1]",
        name: 'Creación de contenidos digitales. Nivel básico',
        hours: 40,
        entidad_subvencion: "/imgs/logos/logo-socs.svg",
        init_date: '17-03-2025',
        end_date: '28-03-2025',
        requirements: socAda,
        estado: true
    },
    {
        id: '2',
        img: '/imgs/cursos/ada/ada-gestion-contenido-digital.webp',
        codigo: "[FCOI10_1]",
        name: 'Búsqueda y gestión de la información digital. Nivel básico',
        hours: 40,
        entidad_subvencion: "/imgs/logos/logo-socs.svg",
        init_date: 'Por definir',
        end_date: 'Por definir',
        requirements: socAda,
        estado: true
    },
    {
        id: '3',
        img: '/imgs/cursos/ada/ada-comunicación-colaboracion-herramientas-digitales.webp',
        codigo: "[FCOI18_1]",
        name: 'Comunicación y colaboración con herramientas digitales. Nivel básico',
        hours: 40,
        entidad_subvencion: "/imgs/logos/logo-socs.svg",
        init_date: 'Por definir',
        end_date: 'Por definir',
        requirements: socAda,
        estado: true
    },
    {
        id: '4',
        img: '/imgs/cursos/ada/ada-herramientas-gestio-web.webp',
        codigo: "[IFCT053PO_1]",
        name: 'Herramientas de gestión web (gestión de contenidos)',
        hours: 40,
        entidad_subvencion: "/imgs/logos/logo-socs.svg",
        init_date: 'Por definir',
        end_date: 'Por definir',
        requirements: socAda,
        estado: true
    },
    {
        id: '5',
        img: '/imgs/cursos/ada/ada-informatica.webp',
        codigo: "[FCOI13_2]",
        name: 'Iniciación a la informática y en competencias digitales básicas',
        hours: 40,
        entidad_subvencion: "/imgs/logos/logo-socs.svg",
        init_date: '14-04-2025',
        end_date: '02-05-2025',
        requirements: socAda,
        estado: true
    },
    {
        id: '6',
        img: '/imgs/cursos/ada/ada-excel.webp',
        codigo: "[FCOI28_2]",
        name: 'Aplicación de la hoja de cálculo (Excel). Nivel inicial',
        hours: 40,
        entidad_subvencion: "/imgs/logos/logo-socs.svg",
        init_date: '05-05-2025',
        end_date: '16-05-2025',
        requirements: socAda,
        estado: true
    },
    {
        id: '7',
        img: '/imgs/cursos/ada/ada-excel-avanzado.webp',
        codigo: "[FCOI27_2]",
        name: 'Aplicación de la hoja de cálculo (Excel). Nivel avanzado',
        hours: 40,
        entidad_subvencion: "/imgs/logos/logo-socs.svg",
        init_date: '19-05-2025',
        end_date: '21-06-2025',
        requirements: socAda,
        estado: true
    },
    {
        id: '8',
        img: '/imgs/cursos/ada/ada-word-avanzado.webp',
        codigo: "[ADGG084PO_2]",
        name: 'Aplicación de documentos de texto (Word). Nivel avanzado',
        hours: 40,
        entidad_subvencion: "/imgs/logos/logo-socs.svg",
        init_date: '31-03-2025',
        end_date: '11-04-2025',
        requirements: socAda,
        estado: true
    },
    {
        id: '9',
        img: '/imgs/cursos/ada/ada-sap-modulsd.webp',
        codigo: "[IFCT83_3]",
        name: 'SAP - Módulo SD, ventas y distribución - nivel usuario',
        hours: 40,
        entidad_subvencion: "/imgs/logos/logo-socs.svg",
        init_date: '07-03-2025',
        end_date: '18-03-2025',
        requirements: socAda,
        estado: true
    },
    {
        id: '10',
        img: '/imgs/cursos/ada/ada-sap-modulomm.webp',
        codigo: "[IFCT82_3]",
        name: 'SAP - Módulo MM, gestión de materiales - nivel usuario',
        hours: 40,
        entidad_subvencion: "/imgs/logos/logo-socs.svg",
        init_date: '31-03-2025',
        end_date: '10-04-2025',
        requirements: socAda,
        estado: true
    },
    {
        id: '11',
        img: '/imgs/cursos/sectorial/sectorial-comercio-exterior.webp',
        codigo: "[COMT0015_1]",
        name: 'Gestión del comercio exterior curso virtual',
        hours: 40,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "14-03-2025",
        end_date: "02-04-2025",
        requirements: consorciSectorial,
        estado: true
    },
    {
        id: '12',
        img: '/imgs/cursos/sectorial/sectorial-gestion-empresa.webp',
        codigo: "[ADGD0040_1]",
        name: 'Gestión fiscal de empresa curso virtual',
        hours: 40,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "04-04-2025",
        end_date: "22-04-2025",
        requirements: consorciSectorial,
        estado: true
    },
    {
        id: '13',
        img: '/imgs/cursos/sectorial/sectorial-fiscalidad-operativa.webp',
        codigo: "[ADGN0010_1]",
        name: 'Fiscalidad operativa curso virtual',
        hours: 60,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "24-04-2025",
        end_date: "14-05-2025",
        requirements: consorciSectorial,
        estado: true
    },
    {
        id: '14',
        img: '/imgs/cursos/sectorial/sectorial-cliente-ingles.webp',
        codigo: "[COMT0013_3]",
        name: 'Atención al cliente del pequeño comercio en lengua extranjera, Inglés',
        hours: 30,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "20-03-2025",
        end_date: "31-03-2025",
        requirements: consorciSectorial,
        estado: true
    },
    {
        id: '15',
        img: '/imgs/cursos/sectorial/sectorial-atencion-venta-establecimientos.webp',
        codigo: "[COMT0017_3]",
        name: 'Atención y venta a establecimientos comerciales',
        hours: 30,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "01-04-2025",
        end_date: "11-04-2025",
        requirements: consorciSectorial,
        estado: true
    },
    {
        id: '16',
        img: '/imgs/cursos/sectorial/sectorial-tecnicas-venta-habiidades-comerciales.webp',
        codigo: "[COMT0016_3]",
        name: 'Técnicas para la venta y habilidades comerciales',
        hours: 40,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "14-04-2025",
        end_date: "28-04-2025",
        requirements: consorciSectorial,
        estado: true
    },
    {
        id: '17',
        img: '/imgs/cursos/sectorial/sectorial-neuromarketing.webp',
        codigo: "[COMM0014_4]",
        name: 'Neuromarketing curso virtual para empleados',
        hours: 35,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "31-03-2025",
        end_date: "14-04-2025",
        requirements: consorciSectorial,
        estado: true
    },
    {
        id: '18',
        img: '/imgs/cursos/sectorial/sectorial-marketing-buscadores-seo-sem.webp',
        codigo: "[COMM41_4]",
        name: 'Marketing Y Buscadores: SEO, SEM Y Analítica Web',
        hours: 45,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "16-04-2025",
        end_date: "05-05-2025",
        requirements: consorciSectorial,
        estado: true
    },
    {
        id: '19',
        img: '/imgs/cursos/sectorial/sectorial-tienda-virtual-gestion-comercio.webp',
        codigo: "[COMM0011_4]",
        name: 'Tienda virtual y gestión del comercio electrónico',
        hours: 35,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "07-05-2025",
        end_date: "20-05-2025",
        requirements: consorciSectorial,
        estado: true
    },
    {
        id: '20',
        img: '/imgs/cursos/foap/foap-direcció-cordinació-infantil-lleure.webp',
        codigo: "[SSCB0211]",
        name: 'Dirección/coordinación de actividades de educación en el ocio infantil',
        hours: 290,
        entidad_subvencion: "/imgs/logos/logo-socs.svg",
        init_date: "13-02-2025",
        end_date: "30-06-2025",
        requirements: socAda,
        estado: true
    },
    {
        id: '21',
        img: '/imgs/cursos/foap/foap-atenció-sociosanitaria-domicili.webp',
        codigo: "[SSCS0108]",
        name: 'Atención sociosanitaria a personas en el domicilio',
        hours: 480,
        entidad_subvencion: "/imgs/logos/logo-socs.svg",
        init_date: "25-02-2025",
        end_date: "16-07-2025",
        requirements: socAda,
        estado: true
    },
    {
        id: '22',
        img: '/imgs/cursos/foap/foap-gestión-llamadas-teleasistencia.webp',
        codigo: "[SSCG0111]",
        name: 'Gestión de llamadas de teleasistencia',
        hours: 230,
        entidad_subvencion: "/imgs/logos/logo-socs.svg",
        init_date: "27-06-2025",
        end_date: "07-11-2025",
        requirements: socAda,
        estado: true
    },
    {
        id: '23',
        img: '/imgs/cursos/consorci/depilacion_mecanica.webp',
        codigo: "[MF0345]",
        name: 'Depilación mecánica y decoloración del vello',
        hours: 90,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "14-01-2025",
        end_date: "04-02-2024",
        requirements: consorciEmpleados,
        estado: true
    },
    {
        id: '24',
        img: '/imgs/cursos/consorci/masaje-estético-manual-mecánico.webp',
        codigo: "[MF0063]",
        name: 'Masaje estético manual y mecánico para empleados',
        hours: 90,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "07-05-2025",
        end_date: "10-06-2025",
        requirements: consorciEmpleados,
        estado: true
    },
    {
        id: '25',
        img: '/imgs/cursos/consorci/diagnostico-protocolos-masajes-esteticos-tecnicas-sensoriales.webp',
        codigo: "[MF0789]",
        name: 'Diagnóstico y protocolos para masajes estéticos y técnicas sensoriales',
        hours: 90,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "07-04-2025",
        end_date: "06-05-2025",
        requirements: consorciEmpleados,
        estado: true
    },
    {
        id: '26',
        img: '/imgs/cursos/consorci/aplicación-cosméticos-para-cambios-color-cabello.webp',
        codigo: "[MF0060]",
        name: 'Aplicación de cosméticos para los cambios de color del cabello',
        hours: 80,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "01-04-2025",
        end_date: "20-05-2025",
        requirements: consorciEmpleados,
        estado: true
    },
    {
        id: '27',
        img: '/imgs/cursos/consorci/análisis-cuero-cabelludo-cabello-protocolos-trabajos-técnicos-curas-capilares.webp',
        codigo: "[MF0347]",
        name: 'Análisis del cuero cabelludo y cabello protocolos de trabajos técnicos para empleados',
        hours: 90,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "09-04-2025",
        end_date: "16-05-2025",
        requirements: consorciEmpleados,
        estado: true
    },
    {
        id: '28',
        img: '/imgs/cursos/consorci/emisión-gestión-llamadas-salientes-en-un-servicio-teleasistencia.webp',
        codigo: "[MF1424]",
        name: 'Emisión y gestión de llamadas salientes en un servicio de teleasistencia para empleados',
        hours: 60,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "28-03-2025",
        end_date: "22-04-2025",
        requirements: consorciEmpleados,
        estado: true
    },
    {
        id: '29',
        img: '/imgs/cursos/consorci/manejo-herramientas-técnicas-habilidades-para-prestar-servicio-teleasistencia.webp',
        codigo: "[MF1425]",
        name: 'Manejo de las herramientas, técnicas y habilidades para prestar el servicio de teleasistencia',
        hours: 80,
        entidad_subvencion: "/imgs/logos/consorci.png",
        init_date: "23-04-2025",
        end_date: "22-05-2025",
        requirements: consorciEmpleados,
        estado: true
    },
 


    

]