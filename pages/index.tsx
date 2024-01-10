import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Community from '../components/Community';
import Technology from '../components/Technology';
import Blog from '../components/Blog';
import Section from '../components/Section';
import LinkWithText from '../components/LinkWithText';
import VideoCarousel from '../components/VideoCarousel';
import axios from 'axios';
import { GetStaticProps } from 'next';
import Workshop from '../components/Workshop';

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
const IndexPage  = ({workshopsVideoIds={},tutorialsVideoIds={},microsVideoIds={}}) => (
  <Layout>
    <Hero />
    <Community />
    <Technology />
    <Workshop />
    <Blog />
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
