import {
  Button,
  Image,
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Tooltip,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react'
import { FaTelegram } from 'react-icons/fa'
const testimonials = [
  {
    name: 'Monica Oramas',
    location: 'Canelones, Uruguay',
    content:
      'Tenemos 2 hijos con DM1 desde sus 3 y 5 años. Hoy tienen 18 y 19 y, si bien la tecnología ha sido de enorme ayuda en nuestras vidas, Fede y Dani fueron fundamentales a la hora de sortear dificultades tecnológicas. Nos contactamos con ellos por videos que vimos en Youtube y fue increíble la buena disposición que tuvieron desde el principio. Sin conocernos nos dedicaron su tiempo con una paciencia increíble hasta lograr que solucionáramos los problemas que teníamos. Sus videos son recontra claros y útiles. Saben muchísimo de tecnología en diabetes y son súper solidarios y generosos. Ojalá el mundo tuviera más Fedes y Danis!',
    avatar:
      '/Flag_of_Uruguay.svg.webp',
  },
  {
    name: 'Xoco Osuna',
    location: 'Tijuana Baja California, México',
    content:
      "Para mí  Danny ha sido una  base fundamental en este proceso de la tecnología y sobre todo en brindarme sus conocimientos y darme las herramientas necesarias para poder apoyar a mi hija y darle  una   mejor calidad de vida. Por medio de telegram conozco a este bello ser, que sin conocerme me ha brindado todo su apoyo incondicional prestando sus conocimientos y también a través de los videos de Danny y Fede  se me ha facilitado más  para poder aprender y avanzar en este proceso. Sus videos me han ayudado también  a enlazar  mi reloj  y así  poder estar más  al pendiente de las glucosa. Gracias infinitas  Danny y a Fede que han echó posible que este proceso sea más  dócil.",
    avatar:
      '/Flag_of_Mexico.svg.webp',
  },
  {
    name: 'Lucía Trabuchi',
    location: 'Buenos Aires, Argentina',
    content:
      'Él uso de tecnologías en él tratamiento de la diabetes mejoró ampliamente la calidad de vida de mi hijo de 7 años, y la mía cómo su mamá. Dani, fede y él canal de páncreas digital, fueron escenciales en mi aprendizaje.',
    avatar:
      '/Flag_of_Argentina.svg.webp',
  },
  {
    name: 'Emmanuel Sánchez Tovar',
    location: 'Guanacaste, Costa Rica',
    content:
      'Hola!  Mi nombre es Emmanuel y vivo con diabetes tipo 1 desde Junio del 2021! y desde el año pasado he  vivido mis mejores meses gracias al apoyo de la comunidad de diabetes y el acceso a tecnología de código abierto desarrollada por y para personas con diabetes! :) en específico, la aplicación AAPS hace posible conectar mi sensor de glucosa y bomba de insulina para manejar mi día a día! Si quieren aprender y saber más acerca de esta tecnología y muchos otros avances, té podes unir al grupo de Telegram de Páncreas digital! Gracias Dani y Fede.',
    avatar:
      '/Flag_of_Costa_Rica.svg.png',
  },
]

const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
]

interface TestimonialCardProps {
  name: string
  location: string
  content: string
  avatar: string
  index: number
}

function TestimonialCard(props: TestimonialCardProps) {
  const { name, location, content, avatar, index } = props
  return (
    <Flex
      boxShadow={'lg'}
      maxW={'640px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('blue.700', 'blue.50')}
      _after={{
        content: '""',
        position: 'absolute',
        height: '21px',
        width: '29px',
        left: '35px',
        top: '-10px',
        backgroundSize: 'cover',
        backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
      }}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        maxW: '640px',
        width: 'full',
        filter: 'blur(40px)',
        transform: 'scale(0.98)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 0,
        left: 0,
        backgroundImage: backgrounds[index % 4],
      }}>
      <Flex direction={'column'} textAlign={'left'} justifyContent={'space-between'}>
        <chakra.p fontWeight={'medium'} fontSize={'13px'} pb={4}>
          <Tooltip label={content} aria-label='A tooltip' placement='auto-start'>
            {content.slice(0, 190)+'...'}
          </Tooltip>
        </chakra.p>
        <chakra.p fontWeight={'bold'} fontSize={13}>
          {name}
          <chakra.span fontWeight={'medium'} color={'blue.50'}>
            {' '}
            - {location}
          </chakra.span>
        </chakra.p>
      </Flex>
  <Image
    marginLeft={'10px'}
    borderRadius='full'
    boxSize='50px'
    src={avatar}
    align={'center'}
  />
    </Flex>
  )
}

export default function GridBlurredBackdrop() {
  return (
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
      overflow={'hidden'}>
      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
        <chakra.h3
          fontWeight={'bold'}
          fontSize={20}
          textTransform={'uppercase'}
          color={'red.700'}>
          Conectate
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={36}
          fontWeight={'bold'}
          color={useColorModeValue('blue.500', 'blue.700')}>
          Un espacio de todos, para todos.
        </chakra.h1>
        <chakra.h2
          margin={'auto'}
          width={'70%'}
          fontFamily={'Inter'}
          fontWeight={'medium'}
          color={useColorModeValue('blue.500', 'blue.700')}>
            <Button
            as={'a'}
            href={'https://t.me/+ahNWHtI3Lsg0YTNh'} 
            target="_blank"
            variant={'solid'}
            colorScheme={'telegram'}
            mr={4}
            leftIcon={<FaTelegram />}
            fontSize={useBreakpointValue({ base: 'xs', md: 'md' })}
            >
              Sumate a nuestro Telegram
            </Button>{' '}       
            <br /><br />{' '}
    Sumate a las{' '}
          <chakra.strong color={useColorModeValue('blue.700', 'blue.500')}>
            1,000+
          </chakra.strong>{' '}
          personas que conforman nuestra comunidad. Compartimos experiencias, consejos y las últimas novedades sobre tecnología aplicada a la diabetes.
          </chakra.h2>{' '} 
    
      </Box>
      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={'20'} mt={16} mb={16} mx={'auto'}>
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard key={index} {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, xl: 1 }} spacing={'20'} mt={16} mb={16} mx={'auto'}>
        <Image
        boxSize={10} 
        color={'red.700'} 
        src="/Blood.png"
        />
      </SimpleGrid>
    </Flex>
  )
}