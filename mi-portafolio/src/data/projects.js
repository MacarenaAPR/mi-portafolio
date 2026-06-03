import placeholder from '../assets/images/project-placeholder.svg'
import logoMenly from '../assets/images/project-logoMenly.png'
import logoGenesis from '../assets/images/project-logoGenesis.png'
import logoVitacare from '../assets/images/project-logoVitacare.png'
import logoSimtexx from '../assets/images/project-logoSimtexx.png'
import logoredisenoLMR from '../assets/images/project-RedisenoLMR.png'
import logoKinesiologia from '../assets/images/project-logoKinesiologia.png'

const projects = [
  {
    id: '1',
    slug: 'menly',
    title: 'Menly',

    shortDescription:
    'Plataforma para restaurantes que combina landing page personalizada, menú digital y gestión centralizada de contenido.',

    problem:
    'Muchos restaurantes dependen de múltiples herramientas para administrar su presencia digital, actualizar menús, destacar promociones y gestionar reservas.',

    solution:
    'Diseñé y desarrollé una plataforma que permite a cada restaurante contar con su propia landing page conectada a un sistema de gestión donde puede administrar categorías, productos, promociones y contenido de forma autónoma.',

    role:
    'UX/UI Designer y Full Stack Developer',

    stack: [
    'React',
    'Vite',
    'Bootstrap',
    'Django',
    'Django REST Framework',
    'PostgreSQL',
    'Render',
    'Vercel',
    'Git',
    'GitHub',
    'Figma'
    ],

    features: [
    'Landing personalizada por restaurante',
    'Gestión de categorías y productos',
    'Menú digital dinámico',
    'Promociones destacadas',
    'Diseño responsive',
    'Panel de administración'
    ],

    learnings: [
    'Arquitectura Full Stack',
    'Diseño de experiencias para negocios locales',
    'Consumo de APIs REST',
    'Modelado de bases de datos relacionales',
    'Diseño responsive mobile-first',
    'Separación entre frontend y backend'
    ],

    image: logoMenly,

    demoUrl: 'https://demo-menly.menly.cl',

    githubUrl: 'https://github.com/MacarenaAPR/AppWeb-Menly',
    }

    ,
  {
    id: '2',
    slug: 'genesis',
    title: 'Génesis Psicología',

    shortDescription:
    'Landing page profesional para servicios de psicoterapia, talleres y acompañamiento en bienestar emocional.',

    problem:
    'La profesional necesitaba una presencia digital moderna que comunicara sus servicios, facilitara el contacto y transmitiera confianza a potenciales pacientes.',

    solution:
    'Diseñé y desarrollé una landing page enfocada en experiencia de usuario, optimización móvil y conversión, integrando información de servicios, talleres y canales de contacto.',

    role:
    'UX/UI Designer y Frontend Developer',

    stack: [
    'React',
    'Vite',
    'Bootstrap',
    'Figma',
    'Vercel',
    'Git',
    'GitHub',
    'Google Analytics'
    ],

    features: [
    'Diseño responsive',
    'Landing orientada a conversión',
    'Integración con AgendaPro',
    'SEO técnico',
    'Google Analytics',
    'Optimización para dispositivos móviles'
    ],

    learnings: [
    'Diseño centrado en usuarios',
    'Optimización SEO para sitios web',
    'Implementación de Google Analytics',
    'Jerarquía visual y conversión',
    'Desarrollo de interfaces responsive'
    ],

    image: logoGenesis,

    demoUrl: 'https://genesispsicologia.vercel.app/',

    githubUrl: 'https://github.com/MacarenaAPR/Landing-page-Genesis-Psicologia',
    }
    ,
    {
        id: '3',
        slug: 'vitacare',
        title: 'Vitacare',

        shortDescription:
        'Proyecto de diseño y planificación de una plataforma SaaS para gestión de pacientes, profesionales y citas médicas.',

        problem:
        'Muchos profesionales independientes utilizan herramientas dispersas para gestionar pacientes, historiales clínicos y agendas, dificultando la administración y el seguimiento de la información.',

        solution:
        'Diseñé la propuesta de producto, arquitectura funcional, experiencia de usuario, modelo de datos y planificación técnica de una plataforma orientada a centralizar la gestión de pacientes y citas.',

        role:
        'Product Designer, UX/UI Designer y Analista Funcional',

        stack: [
        'Figma',
        'React (Planificado)',
        'Django (Planificado)',
        'PostgreSQL (Planificado)',
        'Git',
        'GitHub'
        ],

        features: [
        'Gestión de pacientes',
        'Agenda de citas',
        'Roles y permisos',
        'Historial clínico',
        'Planes de suscripción',
        'Arquitectura SaaS'
        ],

        learnings: [
        'Levantamiento de requerimientos',
        'Diseño UX para sistemas de salud',
        'Arquitectura de software',
        'Modelado de bases de datos relacionales',
        'Diseño de productos SaaS',
        'Planificación de MVP'
        ],

        image: logoVitacare,

        demoUrl: '',

        githubUrl: '',
        }
            ,
    

  {
    id: '4',
    slug: 'simtexx',
    title: 'Simtexx',

    shortDescription:
    'Prototipo de sistema de gestión interna para seguimiento de órdenes de trabajo y procesos operacionales.',

    problem:
    'La gestión de órdenes de trabajo y el seguimiento de actividades se realizaban de forma dispersa, dificultando la trazabilidad de los procesos.',

    solution:
    'Participé en el diseño y desarrollo de un sistema orientado a centralizar órdenes de trabajo, comentarios y seguimiento de actividades mediante una arquitectura web moderna.',

    role:
    'Frontend Developer y Backend Developer',

    stack: [
    'React',
    'Node.js',
    'Express',
    'PostgreSQL',
    'Git',
    'GitHub'
    ],

    features: [
    'Gestión de órdenes de trabajo',
    'Roles de usuario',
    'Comentarios asociados',
    'Base de datos relacional'
    ],

    learnings: [
    'Diseño de APIs REST',
    'Arquitectura cliente-servidor',
    'Modelado relacional',
    'Integración frontend y backend'
    ],

    image: logoSimtexx,

    demoUrl: '',

    githubUrl: 'https://github.com/MacarenaAPR/Simtexx',
    }
    ,
    {
        id: '5',
        slug: 'kinesiologia',
        title: 'Landing Kinesiología',

        shortDescription:
        'Landing page profesional para kinesiólogos enfocada en captación de pacientes y presentación de servicios.',

        problem:
        'Muchos profesionales de la salud no cuentan con una presencia digital que comunique claramente sus servicios y facilite el contacto con potenciales pacientes.',

        solution:
        'Diseñé y desarrollé una landing page moderna enfocada en transmitir confianza, presentar especialidades y facilitar la reserva de atención mediante una experiencia intuitiva y responsive.',

        role:
        'UX/UI Designer y Frontend Developer',

        stack: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Bootstrap',
        'GitHub',
        'Vercel',
        'Figma'
        ],

        features: [
        'Presentación de servicios',
        'Diseño responsive',
        'Llamados a la acción (CTA)',
        'Información profesional',
        'Formulario de contacto',
        'Optimización para dispositivos móviles'
        ],

        learnings: [
        'Diseño de landing pages orientadas a conversión',
        'Jerarquía visual y experiencia de usuario',
        'Diseño responsive mobile-first',
        'Optimización de interfaces para servicios de salud',
        'Buenas prácticas de accesibilidad',
        'Estructuración de contenido para captación de clientes'
        ],

        image: logoKinesiologia,

        demoUrl: 'https://landing-page-kinesiologia.vercel.app/',

        githubUrl: 'https://github.com/MacarenaAPR/Landing-Page-kinesiologia',
        }
        ,
        {
id: '5',
slug: 'la-mechada-real',
title: 'Rediseño La Mechada Real',

shortDescription:
'Propuesta de rediseño web para un restaurante, enfocada en mejorar la experiencia de usuario, la presencia digital y la conversión de clientes.',

problem:
'El sitio existente no destacaba adecuadamente los productos, promociones y canales de contacto, dificultando la experiencia de navegación y la captación de clientes.',

solution:
'Diseñé y desarrollé una propuesta de rediseño moderna orientada a dispositivos móviles, incorporando una mejor jerarquía visual, acceso rápido a la carta, integración con WhatsApp y presentación clara de la información del negocio.',

role:
'UX/UI Designer y Frontend Developer',

stack: [
'HTML5',
'CSS3',
'JavaScript',
'Bootstrap',
'Git',
'GitHub',
'Netlify',
'Figma'
],

features: [
'Rediseño de experiencia de usuario',
'Carta digital interactiva',
'Integración con WhatsApp',
'Mapa de ubicación',
'Diseño responsive',
'Sección de promociones y productos destacados'
],

learnings: [
'Rediseño de interfaces existentes',
'Diseño centrado en conversión',
'Jerarquía visual para negocios gastronómicos',
'Diseño responsive mobile-first',
'Optimización de experiencia para clientes',
'Presentación efectiva de contenido comercial'
],

image: logoredisenoLMR,

demoUrl: 'https://rediseno-la-mechada-real.vercel.app/',

githubUrl: 'https://github.com/MacarenaAPR/Rediseno-La-Mechada-Real',
}


  
]

export default projects
