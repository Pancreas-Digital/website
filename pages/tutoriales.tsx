import Layout from '../components/Layout';
import Section from '../components/Section';
import LinkWithText from '../components/LinkWithText';
import VideoCarousel from '../components/VideoCarousel';
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

type Props = {
  tutorialsVideoIds: VideoItem[];
  microsVideoIds: VideoItem[];
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const apiKey = process.env.YOUTUBE_API_KEY as string;
  const maxVideos = 50 as number;
  const tutorialsPlaylistId = 'PLpRCplanZUGe4wrdCUOfzSKrW1bJlwSk3';
  const microsPlaylistId = 'PLpRCplanZUGf5YaI5VMhfx81h8EaQ2qy3';
  // Simultaneously fetch videos from all playlists
  const [ tutorialsVideoIds, microsVideoIds] = await Promise.all([
    fetchPlaylistVideoIds(tutorialsPlaylistId, apiKey,maxVideos),
    fetchPlaylistVideoIds(microsPlaylistId, apiKey,maxVideos),
  ]);

  // Return the lists of video IDs as props
  return {
    props: {
      tutorialsVideoIds,
      microsVideoIds,
    },
    // Revalidate at most once every hour if there's new content
    revalidate: 3600,
  };
};
const TutorialesPage  = ({tutorialsVideoIds={},microsVideoIds={}}) => (
  <Layout>
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
export default TutorialesPage;
