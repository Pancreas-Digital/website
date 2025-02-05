import Section from '../components/Section';
import LinkWithText from '../components/LinkWithText';
import VideoCarousel from '../components/VideoCarousel';
import {fetchPlaylistVideoIds,VideoItem} from '../utils/youtubeService';
import { useState, useEffect } from 'react';


export default function Workshop(){
    const [workshopsVideoIds, setWorkshopsVideoIds] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const maxVideos = 50 as number;
            const workshopsPlaylistId = 'PLpRCplanZUGdxMODznBwjIQNZg0HeJdww';
            const videos = await fetchPlaylistVideoIds(workshopsPlaylistId,maxVideos);
            setWorkshopsVideoIds(videos);
        }

        fetchData();
    }, []);

  return (<Section
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
    );
}

