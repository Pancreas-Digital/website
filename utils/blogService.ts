import axios from 'axios';
import { cacheService } from './cacheService';

export type Entry = {
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
export const extractFirstImageUrlFromHtml = (html:string)=>{
    const imageTagRegex = /<img.*?src="(.*?)"/;
    const matches = imageTagRegex.exec(html);
  
    if (matches && matches[1]) {
      return matches[1];
    }
  
    return ''; // or a default image URL if you prefer
}
export const cutText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}
  
export const stripHtmlAndKeepLineBreaks = (html:string, maxLength:number = 200) => {
    const withBreaks = html.replace(/<br\s*\/?>/gi, '\n').replace(/<a href=".*?">(.*?)<\/a>/gi, '$1');
    const withoutSpecialCharacters = withBreaks.replace(/&nbsp;/gi, ' ');
    const withoutHtml = withoutSpecialCharacters.replace(/<[^>]+>/g, '');
    return cutText(withoutHtml,maxLength);
};
  
export async function fetchBlogPosts() {
    const fetchFunction = async () => {
      try {
        const url = '/api/blog/feeds/posts/default?alt=json&max-results=18';
        const response = await axios.get(url);
        const entries = response.data.feed.entry;
  
        // Data Mapping
        return entries.map((entry: any): Entry => ({
          id: entry.id.$t,
          title: entry.title.$t,
          content: entry.content.$t,
          published: entry.published.$t,
          updated: entry.updated.$t,
          categories: entry.category.map((cat: any) => cat.term),
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
        throw error; 
      }
    };
    return cacheService.getOrUpdate('blogPosts', fetchFunction,3600);
  }