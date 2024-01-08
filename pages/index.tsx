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
import axios from 'axios';
import { GetStaticProps } from 'next';

type YouTubeVideoSnippet = {
  resourceId: {
    videoId: string;
  };
  title: string;
};

type YouTubeApiResponse = {
  items: {
    snippet: YouTubeVideoSnippet;
  }[];
};

type VideoItem = {
  videoId: string;
};

type Entry = {
  id: string;
  title: string;
  content: string;
  published: string;
  updated: string;
  categories: string[];
  author: string;
  authorUri: string;
  authorEmail: string;
  authorImage: string;
  thumbnail: string;
  commentsCount: string;
  links: {
    rel: string;
    type: string;
    href: string;
    title: string | null;
  }[];
};

type Props = {
  workshopsVideoIds: VideoItem[];
  tutorialsVideoIds: VideoItem[];
  microsVideoIds: VideoItem[];
};
const extractFirstImageUrlFromHtml = (html:string)=>{
  const imageTagRegex = /<img.*?src="(.*?)"/;
  const matches = imageTagRegex.exec(html);

  if (matches && matches[1]) {
    return matches[1];
  }

  return ''; // or a default image URL if you prefer
}
const cutText = (text: string, maxLength: number = 200) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

const stripHtmlAndKeepLineBreaks = (html:string, maxLength:number = 200) => {
  const withBreaks = html.replace(/<br\s*\/?>/gi, '\n').replace(/<a href=".*?">(.*?)<\/a>/gi, '$1');
  const withoutSpecialCharacters = withBreaks.replace(/&nbsp;/gi, ' ');
  const withoutHtml = withoutSpecialCharacters.replace(/<[^>]+>/g, '');
  return cutText(withoutHtml,maxLength);
};

const fetchPlaylistVideoIds = async (playlistId: string, apiKey: string, maxVideos:number): Promise<VideoItem[]> => {
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxVideos}&key=${apiKey}`;

  try {
    const response = await axios.get<YouTubeApiResponse>(url);
    return response.data.items.map(item => ({
      videoId: item.snippet.resourceId.videoId,
    }));
  } catch (error) {
    console.error('Error fetching playlist videos:', error);
    return [];
  }
};

const fetchBlogPosts = async (): Promise<Entry[]> => {
  const url = 'https://pancreasdigital.blogspot.com/feeds/posts/default?alt=json&max-results=18';
  try {
    const response = await axios.get(url);
    const data = response.data.feed;

    return  data.entry.map((entry: any): Entry => ({
      id: entry.id.$t,
      title: entry.title.$t,
      content: entry.content.$t,
      published: entry.published.$t,
      updated: entry.updated.$t,
      categories: entry.category.map((cat:any) => cat.term),
      author: entry.author[0].name.$t,
      authorUri: entry.author[0].uri.$t,
      authorEmail: entry.author[0].email.$t,
      authorImage: entry.author[0]["gd$image"].src,
      thumbnail: entry["media$thumbnail"].url,
      commentsCount: entry.thr$total.$t,
      links: entry.link.map((link: any) => ({
        rel: link.rel,
        type: link.type,
        href: link.href,
        title: link.title ? link.title : null
      })),
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const apiKey = process.env.YOUTUBE_API_KEY as string;
  const maxVideos = 50 as number;
  const workshopsPlaylistId = 'PLpRCplanZUGdxMODznBwjIQNZg0HeJdww';
  const tutorialsPlaylistId = 'PLpRCplanZUGe4wrdCUOfzSKrW1bJlwSk3';
  const microsPlaylistId = 'PLpRCplanZUGf5YaI5VMhfx81h8EaQ2qy3';
  const blogPosts = await fetchBlogPosts() as Entry[];
  // Simultaneously fetch videos from all playlists
  const [workshopsVideoIds, tutorialsVideoIds, microsVideoIds] = await Promise.all([
    fetchPlaylistVideoIds(workshopsPlaylistId, apiKey,maxVideos),
    fetchPlaylistVideoIds(tutorialsPlaylistId, apiKey,maxVideos),
    fetchPlaylistVideoIds(microsPlaylistId, apiKey,maxVideos),
  ]);

  // Return the lists of video IDs as props
  return {
    props: {
      workshopsVideoIds,
      tutorialsVideoIds,
      microsVideoIds,
      blogPosts
    },
    // Revalidate at most once every hour if there's new content
    revalidate: 3600,
  };
};
const IndexPage  = ({workshopsVideoIds={},tutorialsVideoIds={},microsVideoIds={},blogPosts=[]}) => (
  <Layout>
    <Hero />
    <Section
      id={'comunidad'}
      title="Comunidad"
      texts={[
        'Conocé nuestras historias y sé parte de nuestra red de apoyo.',
        'Somos una comunidad diversa y unida, gestionando la diabetes juntos. Descubre historias inspiradoras y comparte la tuya.',
        'Todo lo hacemos sin fines de lucro.',
      ]}
      childrens={[
        <GridBlurredBackdrop />,
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
        'No te pierdas nuestros talleres y eventos sobre tecnología y diabetes.',
        'Eventos en vivo (virtuales y presenciales) para aprender y compartir cómo la tecnología puede ayudarte con la diabetes.',
        'Aprendé y conocé gente que está en la misma que vos.',
      ]}
      
      childrens={[
        <VideoCarousel
        items={workshopsVideoIds as VideoItem[]}
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
  childrens={blogPosts.map((entry:Entry) => {
    // Asegúrate de que 'categories' exista y sea un arreglo
    const categories = entry.categories || ['General'];
  
    return (
      <BlogPostWithImage
        tags={categories}
        author={{
          'name': entry.author || 'Autor Desconocido',
          'url': entry.authorUri || '#',
          'imgSrc': entry.authorImage ? `https:${entry.authorImage}` : '/broken/author/image.jpg'
        }}
        post={{
          'title': entry.title,
          'url': entry.links.find(link => link.rel === 'alternate')?.href || '#',
          'imgSrc':  extractFirstImageUrlFromHtml(entry.content),
          'text': stripHtmlAndKeepLineBreaks(entry.content) || 'No hay contenido disponible.',
          'date': entry.published ? new Date(entry.published).toLocaleDateString() : 'Fecha Desconocida'
        }}
      />
    );
  })}
  
  bottomChildrens={[
    <LinkWithText text='Podés ver más posteos en nuestro' link={{'text':'blog','url':'https://pancreasdigital.blogspot.com'}}></LinkWithText>
  ]}
></Section>

    <Section
      title="Tutoriales y videos útiles"
      id={'tutoriales'}
      texts={[
        'Aprendé con nuestros videos.',
        'Todo lo que necesitás saber sobre tecnología y diabetes, explicado simple y claro.',
        'Mirá nuestros tutoriales y reseñas más vistos.'
      ]}
      childrens={[
        <VideoCarousel items ={tutorialsVideoIds as VideoItem[]} />,        
        <LinkWithText text='Por la semana del dia Mundial de la Diabetes subimos una serie de micros, dedicados a tecnologías aplicadas a la diabetes, donde estuvimos hablando de un sistema de páncreas artificial llamado Android APS' link={{'text':'Micros de Android APIS','url':'https://www.youtube.com/playlist?list=PLpRCplanZUGf5YaI5VMhfx81h8EaQ2qy3'}}></LinkWithText>,
        <VideoCarousel items ={microsVideoIds as VideoItem[]} />,      
      ]}
      bottomChildrens={[
        <LinkWithText text='Podés ver más videos en nuestro' link={{'text':'canal de Youtube','url':'https://youtube.com/@PancreasDigital'}}></LinkWithText>
      ]}
    ></Section>
  </Layout>
);
export default IndexPage;
