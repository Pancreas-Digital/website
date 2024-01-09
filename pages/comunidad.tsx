import Layout from '../components/Layout';
import Section from '../components/Section';
import Person from '../components/Person';
import GridBlurredBackdrop from '../components/Testimonials';

const ComunidadPage  = () => (
  <Layout>
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
  </Layout>
);
export default ComunidadPage;
