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
  workshopsVideoIds: VideoItem[];
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
  const workshopsPlaylistId = 'PLpRCplanZUGdxMODznBwjIQNZg0HeJdww';

  // Simultaneously fetch videos from all playlists
  const [workshopsVideoIds] = await Promise.all([
    fetchPlaylistVideoIds(workshopsPlaylistId, apiKey,maxVideos),
  ]);

  // Return the lists of video IDs as props
  return {
    props: {
      workshopsVideoIds,
    },
    // Revalidate at most once every hour if there's new content
    revalidate: 3600,
  };
};
const IndexPage  = ({workshopsVideoIds={}}) => (
  <Layout>
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
  </Layout>
);
export default IndexPage;
