import team1 from './img/team1.png';
import team2 from './img/team2.png';
import team3 from './img/team3.png';
import team4 from './img/team4.png';
import imgColorService1 from './img/ServiceCardColor1.jpg';
import imgColorService2 from './img/ServiceCardColor2.png';
import imgColorService3 from './img/ServiceCardColor3.png';
import imgColorService4 from './img/ServiceCardColor4.png';
import imgColorService5 from './img/ServiceCardColor5.png';
import imgColorService6 from './img/ServiceCardColor6.png';
import imgColorService7 from './img/ServiceCardColor7.png';
import imgColorService8 from './img/ServiceCardColor8.png';
import imgService1 from './img/ServiceCard1.png';
import imgService2 from './img/ServiceCard2.png';
import imgService3 from './img/ServiceCard3.png';
import imgService4 from './img/ServiceCard4.png';
import imgService5 from './img/ServiceCard5.png';
import imgService6 from './img/ServiceCard6.png';
import imgService7 from './img/ServiceCard7.png';
import imgService8 from './img/ServiceCard8.png';


const data = {
  dataLinks: [
    {
      id: 1,
      title: "inicio",
      link: "/",
    },
    {
      id: 2,
      title: "quienes somos",
      link: "/about",
    },
    {
      id: 3,
      title: "servicios",
      link: "/services",
    },
    // {
    //   id: 4,
    //   title: "inside project",
    //   link: "/project",
    // },
    {
      id: 4,
      title: "contacto",
      link: "/contact",
    },
    {
      id: 5,
      title: "por que elegirnos",
      link: "/why",
    },
  ],
  dataForte: {
    facebook: "https://www.facebook.com/FORTEstructuras/",
    instagram: "https://www.instagram.com/forteestruturas/",
    web: "https://fortestructuras.com/#inside",
    mail: "info@forteestructuras.com",
    telefonos: "03571 - 643736 / 15323500",
    slogan: '"no somos los únicos, por ello decidimos ser los mejores"',
  },
  titulos: {
    title1: "nuestros servicios",
    title2: "montaje en todo el país",
    title3: "parte de nuestro equipo",
    title4: "quienes somos",
    title5: "contacto",
  },
  servicios: [
    {
      id: "01",
      title: "Estructuras metálicas",
      text1:"Somos especialistas en la fabricación de estructuras metálicas, nos adaptamos a la necesidad del cliente con la mejor atención, calidad y precios.",      
      text2:"Por ello le animamos a que se comunique con nosotros o nos visite, amablemente le ofreceremos un café y dialogaremos en cómo solucionar sus problemas.",      
      img: imgService1,
      imgColor: imgColorService1,
    },
    {
      id: "02",
      title: "Ingeniería",    
      text1:"Nuestro equipo de ingenieros especialistas en el área pueden llevar a cabo todo su proyecto.",  
      img: imgService2,
      imgColor: imgColorService2,
    },
    {
      id: "03",
      title: "Herrería de obra",    
      text1:"Abarcando todas las areas de una metalúgica integral, fabricamos y montamos toda la herrería de obra.",  
      img: imgService3,
      imgColor: imgColorService3,
    },
    {
      id: "04",
      title: "Cañerías",    
      text1:"Desde cañerías, hasta redes de incendio, nuestro equipo puede suplir sus necesidades.",   
      img: imgService4,
      imgColor: imgColorService4,
    },
    {
      id: "05",
      title: "Corte y plegado",  
      text1:"En caso que requiera hacer un trabajo a medida de corte y plegado de chapas, contamos con guillotinas y plegadoras hidráulicas con control numérico para la realización de los mismos.",     
      text2:"Las piezas se realizaran con los planos que nos brinde o con una muestra de la misma.",     
      img: imgService5,
      imgColor: imgColorService5,
    },
    {
      id: "06",
      title: "Arenado y pintura", 
      text1:"Se trabaja con arena común y arena certificada, mordiente y color de metal según especificaciones del cliente.",      
      text2:"Primers (Zinc silicatro) fondo cromato de zinc, expocidicas, sintética, poliuretanicas, barnices y lacas.",      
      img: imgService6,
      imgColor: imgColorService6,
    },
    {
      id: "07",
      title: "Tanques y servicios",   
      text1:"Fabricamos tanques de chapa, de acero al carbono de primera calidad, rolada con doble soldadura -interior exterior-; con tecnología, normas de seguridad, y accesorios homologados.",    
      img: imgService7,
      imgColor: imgColorService7,
    },
    {
      id: "08",
      title: "Corte pantógrafo CNC",  
      text1:"A efecto de brindar soluciones específicamente elaboradas de acuerdo a las necesidades de nuestros clientes ofrecemos un amplio rango de aplicaciones y servicios de cortes en distintos espesores con pantógrafo CNC.",     
      img: imgService8,
      imgColor: imgColorService8,
    },
  ],
  textosVarios: {
    texto1: "calidad, servicio y garantía en ",
    texto2: "fabricación y montaje",
    texto3: "Forte es una marca que representa calidad y servicio que encarna un espíritu creativo, adaptable y flexible.",
    texto4: "El enfoque vanguardista de Forte hacia las estructuras metálicas siempre la ha diferenciado de los competidores, ofreciendo servicio al cliente único, con la prioridad de entregar un producto fuerte, durable y de calidad.",
    texto5: "La filosofía institucional está fundada en la mejor relación precio/producto. Para ello hemos formado un equipo de trabajo sólido y profesional. Contando con equipamiento e instalaciones de primer nivel, con la motivación principal de entregar valor y soluciones a nuestros clientes.",
    texto6: "Estamos situados en calle Av. Savio 1837 de la Ciudad de Río Tercero, Córdoba. Ubicados en un punto neurálgico de nuestro país, una ciudad altamente productiva y equidistante de cualquier lugar del país.",
    texto7: "Porque queremos conocerle, no escribimos una amplia descripción de quienes somos, nos interesa el contacto persona a persona, un apretón de manos y la confianza que se transmite en el contacto real.",
    texto8: "Por ello le animamos a que se comunique con nosotros o nos visite, amablemente le ofreceremos un café y dialogaremos en cómo solucionar sus problemas.",
    texto9: "SI TIENES ALGUNA PREGUNTA O COMENTARIO CONTACTANOS!",
  },
  footerIconsBig : [
    {
      id: 1,
      icon: "fab fa-facebook fa-2x",
      text: "FORTEstructuras",
      href: "https://www.facebook.com/FORTEstructuras/"
    },
    {
      id: 2,
      icon: "fab fa-whatsapp fa-2x",
      text: "3571-323500",
      href:"https://wa.me/5493571323500",
    },
    {
      id: 3,
      icon: "fas fa-phone-square-alt fa-2x",
      text: "03571-643736",
      href: "/contact"
    },
    {
      id: 4,
      icon: "far fa-envelope fa-2x",
      text: "info@fortestructuras.com",
      href: "/contact"
    },
  ],
  footerIconsSmall: [
    {
      id: "01",
      text: "Estructuras metálicas",
      icon: "",
      href: "/services"
    },
    {
      id: "02",
      text: "Ingeniería",    
      icon: "",
      href: "/services"
    },
    {
      id: "03",
      text: "Herrería de obra",  
      icon: "",
      href: "/services"  
    },
    {
      id: "04",
      text: "Cañerías",
      icon: "",
      href: "/services"    
    },
    {
      id: "05",
      text: "Corte y plegado", 
      icon: "",
      href: "/services" 
    },
    {
      id: "06",
      text: "Arenado y pintura", 
      icon: "",
      href: "/services" 
    },
    {
      id: "07",
      text: "Tanques y servicios", 
      icon: "",
      href: "/services"   
    },
    {
      id: "08",
      text: "Corte pantógrafo CNC",
      icon: "",
      href: "/services"   
    },
  ],
  team: [
    {
      id: 1,
      name: "José Carbajal",
      position: "owner",
      picture: team1,
    },
    {
      id: 2,
      name: "Vanesa Figueroa",
      position: "Administración",
      picture: team2,
    },
    {
      id: 3,
      name: "Pablo Puecher",
      position: "Director de construcción",
      picture: team3,
    },
    {
      id: 4,
      name: "Rolando Pizzi",
      position: "ingenieria",
      picture: team4,
    },
  ],
  formulario: {
    form1: {
      label: "Nombre:",
      placeHolder: "Ingrese su nombre",
      helpText: "",
    },
    form2: {
      label: "Dirección de e-mail:",
      placeHolder: "Ingrese su email",
      helpText: "No compartiremos tu email",
    },
    form3: {
      label: "Deja tu mensaje:",
      placeHolder: "Tu consulta es bienvenida!",
      helpText: "",
    },
  },
}

export default data;