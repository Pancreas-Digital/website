import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Person from '../components/Person';

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
          link={{ text: '@fedemotta_', url: 'https://twitter.com/fedemotta_' }}
          description="Papá de Valentino y Franco. Programador interesado en tecnología aplicada a la diabetes. Fanático de Superman. 'Todo tiene su tiempo'
          (Eclesiastés 3:1-8)."
          tags={['programacion', 'tecnologia', 'diabetes']}
        />,
        <Person
          imgSrc="daniela.jpeg"
          name="Daniela Segalowicz"
          link={{ text: '', url: '#' }}
          description="Mamá de Sol y Tomás. Psicóloga. En aprendizaje permanente, difundiendo, transmitiendo y compartiendo la importancia de estar cerca, conectados en red. 'Mí chance es hoy'"
          tags={['psicología', 'xDrip+', 'diabetes']}
        />,
      ]}
    ></Section>
    <Section
      title="Todo sobre diabetes"
      id='todo-sobre-diabetes'
    ></Section>
    <Section
      title="Talleres Online"
      id='talleres-online'
    ></Section>
    <Section
      title="Proyectos Open Source"
      id='proyectos-open-source'
    ></Section>
    <Section
      title="Escribinos"
      id='escribinos'
    ></Section>
  </Layout>
);

export default IndexPage;
