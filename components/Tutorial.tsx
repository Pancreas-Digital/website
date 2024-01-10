import Section from '../components/Section';
import LinkWithText from '../components/LinkWithText';
import VideoCarousel from '../components/VideoCarousel';
import {fetchPlaylistVideoIds,VideoItem} from '../utils/youtubeService';
import { useState, useEffect } from 'react';


export default function Tutorial(){
  const [tutorialsVideoIds, setTutorialsVideoIds] = useState([]);
  const [microsVideoIds, setMicrosVideoIds] = useState([]);
  useEffect(() => {
        async function fetchData() {
            const maxVideos = 50 as number;
            const tutorialsPlaylistId = 'PLpRCplanZUGe4wrdCUOfzSKrW1bJlwSk3';
            const tutorialsVideos = await fetchPlaylistVideoIds(tutorialsPlaylistId,maxVideos);
            const microsPlaylistId = 'PLpRCplanZUGf5YaI5VMhfx81h8EaQ2qy3';
            const microsVideos = await fetchPlaylistVideoIds(microsPlaylistId,maxVideos);
            setTutorialsVideoIds(tutorialsVideos);
            setMicrosVideoIds(microsVideos);
        }

        fetchData();
    }, []);

  return (
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
      );
}

