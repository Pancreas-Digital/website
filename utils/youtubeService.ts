import axios from 'axios';
import { cacheService } from '../utils/cacheService';

export type YouTubeVideoSnippet = {
    resourceId: {
        videoId: string;
    };
    title: string;
};
export type YouTubeApiResponseItem = {
    snippet: YouTubeVideoSnippet;
};

export type YouTubeApiResponse = {
    items: {
        snippet: YouTubeVideoSnippet;
    }[];
};

export type VideoItem = {
    videoId: string;
};

export async function fetchPlaylistVideoIds(playlistId: string, apiKey: string, maxVideos: number) {
    const cacheKey = `playlistVideos-${playlistId}`; // A unique cache key based on the playlist ID

    // The function to actually make the API request and process the data
    const fetchFunction = async () => {
        const url = `/api/proxy/google/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxVideos}&key=${apiKey}`;
        try {
            const response  = await axios.get(url);
            return response.data.items.map((item : YouTubeApiResponseItem)  => ({
                videoId: item.snippet.resourceId.videoId,
            }));
        } catch (error) {
            console.error('Error fetching playlist videos:', error);
            throw error; // Throw the error for handling it higher up if necessary
        }
    };

    // Use the cache service to get or update the data
    return cacheService.getOrUpdate(cacheKey, fetchFunction, 3600000); // 3600000 milliseconds = 1 hour
}