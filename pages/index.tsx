import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Person from '../components/Person';
import LinkWithText from '../components/LinkWithText';
import VideoCarousel from '../components/VideoCarousel';
import GridBlurredBackdrop from '../components/Testimonials';
 import BlogPostWithImage from '../components/Blog';
import PostWithLike from '../components/Project';
import { BsArrowUpRight, BsArrowDown } from 'react-icons/bs'

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLpRCplanZUGdxMODznBwjIQNZg0HeJdww&key=${process.env.YOUTUBE_API_KEY}`)
  const videos = await res.json();
  return {
      props: {
          videos
      }
  }
}
const IndexPage = () => (
  <Layout title="Pancreas Digital - Todo sobre tecnología aplicada a la diabetes">
    <Hero />
    <Section
      id={'comunidad'}
      title="Comunidad"
      texts={[
        'Conocé nuestras historias y sé parte de nuestra red de apoyo.',
        'Somos una comunidad diversa y unida, enfrentando la diabetes juntos. Descubre historias inspiradoras y comparte la tuya.',
        'Todo lo hacemos sin fines de lucro.',
      ]}
      childrens={[
        <Person
          imgSrc="fedemotta.jpeg"
          name="Federico Nicolás Motta"
          link={{ text: '@PancreasDigital', url: 'https://www.instagram.com/PancreasDigital/' }}
          description="Papá de Valentino y Franco. Programador interesado en tecnología aplicada a la diabetes. Fanático de Superman. 'Todo tiene su tiempo'
          (Eclesiastés 3:1-8)."
          tags={['PROGRAMACIÓN','CLOUD','GenAI', 'DIY']}
          contact={{ text: 'Escribime', url: 'https://ig.me/m/PancreasDigital' }}
        />,
        <Person
          imgSrc="daniela.jpeg"
          name="Daniela Segalowicz"
          link={{ text: '@cadapersonaunmundo', url: 'https://www.instagram.com/cadapersonaunmundo/' }}
          description="Mamá de Sol y Tomás. Psicóloga. En aprendizaje permanente, difundiendo, transmitiendo y compartiendo la importancia de estar cerca, conectados en red. 'Mí chance es hoy'"
          tags={['PSICOLOGÍA','XDRIP+','AAPS','DIY']}
          contact={{ text: 'Escribime', url: 'https://ig.me/m/cadapersonaunmundo' }}
        />,
        <GridBlurredBackdrop />
      ]}
    ></Section>
    <Section
      title="Tecnología"
      id={'tecnologia'}
      texts={[
        'Las mejores herramientas tech para tu diabetes.',
        'Chequeá las apps open source y dispositivos que te recomendamos. Acá te damos toda la info para que elijas con conocimiento.',
        'La tecnología es tu aliada en la gestión de la diabetes.'
      ]}
      childrens={[ 
        <PostWithLike tags={['Android','Java']} url='https://github.com/NightscoutFoundation/xDrip' link={{'text':'Descargar el APK','url':'https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk', 'icon':<BsArrowDown/>}} name='xDrip+' description='xDrip+ es una aplicación de Android (no oficial e independiente) que funciona como procesador y centro de datos para muchos dispositivos diferentes.' imgSrc='/xdrip-screenshot.png' iconSrc='/xdrip-logo.webp'/>,      
        <PostWithLike tags={['Web','Node']} url='https://github.com/nightscout/cgm-remote-monitor' link={{'text':'Empezar con Nightscout','url':'https://nightscout.github.io/nightscout/new_user/', 'icon':<BsArrowUpRight/>}} name='Nightscout' description='Nightscout (también conocida como CGM in the Cloud) es una aplicación en la nube de código abierto utilizada por personas con diabetes y padres de niños con diabetes para visualizar, almacenar y compartir los datos de sus sensores de monitoreo continuo de glucosa en tiempo real.' imgSrc='/nightscout-screenshot.png' iconSrc='/nightscout-logo.png'/>,      
        <PostWithLike tags={['Android','Java']} url='https://github.com/nightscout/AndroidAPS' link={{'text':'Empezar con AAPS','url':'https://androidaps.readthedocs.io/es/latest/index.html', 'icon':<BsArrowUpRight/>}} name='Android APS' description='AAPS es una aplicación de código abierto para personas que viven con diabetes, dependientes de insulina y que actúa como un sistema de páncreas artificial (APS) en teléfonos inteligentes Android de Google.' imgSrc='/aaps-screenshot.png' iconSrc='/aaps-logo.webp'/>,      
        <PostWithLike tags={['Android','Java']} url='https://github.com/bigdigital/watchdrip' link={{'text':'Instalar WatchDrip+','url':'https://watchdrip.org/', 'icon':<BsArrowUpRight/>}} name='WatchDrip+' description='WatchDrip+ es una integración de xDrip+ para varios modelos de relojes de mano, principalmente para las marcas Xiaomi y Amazfit.' imgSrc='/watchdrip-screenshot.png' iconSrc='/watchdrip-logo.png'/>,      
        <PostWithLike tags={['Web','React']} url='https://github.com/Pancreas-Digital/bolus-calculator' link={{'text':'Usar la calculadora','url':'https://calculadora.pancreas.digital', 'icon':<BsArrowUpRight/>}} name='Calculadora de Bolos' description='Esta es una calculadora de bolo. Utiliza una fórmula estándar para calcular la insulina deseada a aplicar. La fórmula se basa en glucemia, ratio, corrección, objetivo y carbohidratos.' imgSrc='/calculadora-screenshot.png' iconSrc='/Circle.png'/> ,      
        <PostWithLike tags={['Apple','IPhone','IPad']} url='https://cukr.io/' name='Shuggah' description='Aplicación sencilla y gratuita que te permite controlar tu diabetes usando tus indicadores clave.' imgSrc='/shuggah-screenshot.png' iconSrc='/shuggah-logo.svg' link={{'text':'Descargar en el App Store','url':'https://apps.apple.com/sa/app/shuggah/id1586789452', 'icon':<BsArrowDown/>}}/>,      
        <PostWithLike tags={['Iphone','Android']} url='https://miaomiaoreader.com/' name='Miaomiao' description='Smart Reader para Freestyle Libre. Lecturas continuas de glucosa cada 5 minutos directamente a su teléfono móvil o reloj.' imgSrc='/miaomiao-screenshot.webp' iconSrc='/miaomiao-logo.avif' link={{'text':'Comprar el dispositivo','url':'https://miaomiaoreader.com/collections/all', 'icon':<BsArrowUpRight/>}}/>,
        <PostWithLike tags={['Iphone','Android']} url='https://bubbleshop.eu/' name='Bubble' description='Sistema de monitoreo de glucosa. Toma el control de tus niveles de glucosa con monitorización automática.' imgSrc='/bubble-screenshot.jpeg' iconSrc='/bubble-logo.png' link={{'text':'Comprar el dispositivo','url':'https://bubbleshop.eu/shop/', 'icon':<BsArrowUpRight/>}}/>,      
        <PostWithLike tags={['IPhone','Android']} url='https://www.freestyle.abbott/' name='FreeStyle Libre' description='El sensor FreeStyle Libre es discreto y fácil de usar. Se aplica en la parte posterior superior del brazo y realiza lecturas de glucosa automáticamente cada un minuto.' imgSrc='/freestyle-screenshot.jpeg' iconSrc='/freestyle-logo.png' link={{'text':'Comprar el dispositivo','url':'https://www.freestyle.abbott/ar-es/home/donde-comprar.html', 'icon':<BsArrowUpRight/>}}/>,      
        <PostWithLike tags={['IPhone','Android']} url='https://www.dexcom.com/es-ar' name='Dexcom ONE' description='Dexcom ONE es una forma más inteligente, eficaz y fácil de controlar la diabetes.' imgSrc='/dexcom-screenshot.webp' iconSrc='/dexcom-logo.png' link={{'text':'Ver más','url':'https://www.dexcom.com/es-ar/dexcom-one', 'icon':<BsArrowUpRight/>}}/>,
    ]}
    ></Section>
    <Section
      title="Talleres online y presenciales"
      id={'talleres'}
      texts={[
        'Organizamos talleres gratuitos sobre distintos temas relacionados a la diabetes. Virtuales y presenciales.',
        'Algunos talleres son sobre distintas aplicaciones que se usan para el control de la diabetes, otros sobre tecnologías mas nuevas o simplemente para visibilizar sobre la condición.',
        'Estos son algunos de nuestros talleres:',
      ]}
      
      childrens={[
        <VideoCarousel
        items={['TVT02w7mG2E','SQgZPO3DpcA','Cj6useTz4Ug','S5ccxmV4sHI','NBry6KO4vuw','w3GbR2MTikQ']}
        />,      
      ]}
      bottomChildrens={[
        <LinkWithText text='Podés ver más videos en nuestro' link={{'text':'canal de Youtube','url':'https://youtube.com/@PancreasDigital'}}></LinkWithText>
      ]}
    ></Section>
    <Section
      title="Nuestro Blog"
      id={'blog'}
      texts={[
        "Actualizate con lo último en diabetes y tecnología.",
        "Nuestro blog es un espacio donde compartimos noticias, consejos y todo lo que necesitás saber sobre tecnología y diabetes.", 
        "Mantenete siempre un paso adelante."
      ]}
      childrens={[
        <BlogPostWithImage />,      
        <BlogPostWithImage />,      
        <BlogPostWithImage />,      
        <BlogPostWithImage />,      
        <BlogPostWithImage />,      
      ]}
      bottomChildrens={[
        <LinkWithText text='Podés ver más posteos en nuestro' link={{'text':'blog','url':'https://pancreasdigital.blogspot.com'}}></LinkWithText>
      ]} 
    ></Section>
    <Section
      title="Tutoriales y videos útiles"
      id={'tutoriales'}
      texts={[
        'Estos son nuestros tutoriales y videos útiles más vistos:',
      ]}
      childrens={[
        <VideoCarousel items ={['FU3X73w3vkQ','Ynhss8HQphA','l2KyKca25_8','ydNRvtp9uyw','P-bPLWTTCNc','6nZ1TuVTpRs']} />,      
      ]}
      bottomChildrens={[
        <LinkWithText text='Podés ver más videos en nuestro' link={{'text':'canal de Youtube','url':'https://youtube.com/@PancreasDigital'}}></LinkWithText>
      ]}
    ></Section>
  </Layout>
);
export default IndexPage;
