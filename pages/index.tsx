import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Person from '../components/Person';
import LinkWithText from '../components/LinkWithText';
import VideoCarousel from '../components/VideoCarousel';
import BlogPostWithImage from '../components/Blog';
import PostWithLike from '../components/Project';

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLpRCplanZUGdxMODznBwjIQNZg0HeJdww&key=${process.env.YOUTUBE_API_KEY}`)
  const videos = await res.json();
  console.log(videos);
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
      id='quienes-somos'
      title="Quienes somos"
      texts={[
        'Somos un grupo de padres que se conocieron por internet, debido a que nuestros hijos tienen diabetes. Compartimos las ganas de ayudar al otro.',
        'Empezamos resolviendo dudas y consultas, relacionadas con tecnologías aplicadas a la diabetes, a través de redes sociales. Luego comenzamos a organizar talleres virtuales sobre estos temas. ',
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
      ]}
    ></Section>
    <Section
      title="Todo sobre diabetes"
      id='todo-sobre-diabetes'
      childrens={[
        <BlogPostWithImage />,      
        <BlogPostWithImage />,      
        <BlogPostWithImage />,      
        <BlogPostWithImage />,      
        <BlogPostWithImage />,      
        <BlogPostWithImage />,      
      ]}
      
    ></Section>

    <Section
      title="Talleres Online"
      id='talleres-online'
      texts={[
        'Organizamos talleres gratuitos sobre distintos temas relacionados a la diabetes.',
        'Algunos talleres son sobre distintas aplicaciones que se usan para el control de la diabetes, otros sobre tecnologías mas nuevas o simplemente para visibilizar sobre la condición.',
        'Estos son algunos de nuestros talleres:',
      ]}
      
      childrens={[
        <VideoCarousel
        items={['TVT02w7mG2E','SQgZPO3DpcA','Cj6useTz4Ug','S5ccxmV4sHI','NBry6KO4vuw','w3GbR2MTikQ']}
        />,      
      ]}
      bottomChildrens={[
        <LinkWithText text='Podés ver más videos en nuestro' link={{'text':'canal de Youtube','url':'https://www.youtube.com/c/PancreasDigital'}}></LinkWithText>
      ]}
    ></Section>
    <Section
      title="Tutoriales y videos útiles"
      id='tutoriales-videos-utiles'
      texts={[
        'Organizamos talleres gratuitos sobre distintos temas relacionados a la diabetes.',
        'Algunos talleres son sobre distintas aplicaciones que se usan para el control de la diabetes, otros sobre tecnologías mas nuevas o simplemente para visibilizar sobre la condición.',
        'Estos son algunos de nuestros talleres:',
      ]}
      childrens={[
        <VideoCarousel items ={['FU3X73w3vkQ','Ynhss8HQphA','l2KyKca25_8','ydNRvtp9uyw','P-bPLWTTCNc','6nZ1TuVTpRs']} />,      
      ]}
      bottomChildrens={[
        <LinkWithText text='Podés ver más videos en nuestro' link={{'text':'canal de Youtube','url':'https://www.youtube.com/c/PancreasDigital'}}></LinkWithText>
      ]}
    ></Section>
    <Section
      title="Proyectos Open Source"
      id='proyectos-open-source'
      childrens={[     
        <PostWithLike />,      
        <PostWithLike />,      
        <PostWithLike />,      
        <PostWithLike />,      
        <PostWithLike />,      
        <PostWithLike />,      
      ]}
    ></Section>
  </Layout>
);

export default IndexPage;
