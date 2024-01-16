// pages/api/google/[...params].ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// Base URL for the YouTube API
const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3/';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Extracting the playlistId from the query parameters
  const { playlistId } = req.query;

  // Check if the playlistId is provided
  if (!playlistId) {
    return res.status(400).json({ error: 'Playlist ID is required' });
  }

  // Check if ALLOWED_PLAYLISTS is defined in environment variables
  const allowedPlaylistIds = process.env.ALLOWED_PLAYLISTS ? process.env.ALLOWED_PLAYLISTS.split(',') : [];

  // Check if the requested playlistId is in the list of allowed IDs
  if (!allowedPlaylistIds.includes(playlistId as string)) {
    return res.status(403).json({ error: 'Access to this playlist is not authorized' });
  }

  try {
    // Construct the URL for the YouTube API request
    const youtubeApiUrl = `${YOUTUBE_API_BASE_URL}playlistItems?part=snippet&playlistId=${playlistId}&key=${process.env.YOUTUBE_API_KEY}`;

    // Perform the request to the YouTube API
    const response = await axios.get(youtubeApiUrl);
    res.status(200).json(response.data);
  } catch (error: any) { // Using 'any' to handle different types of errors
    console.error('Error fetching data from YouTube API:', error);

    // Check if 'error' has a 'response' property (common with Axios errors)
    if (error.response) {
      // If it's an Axios error, respond with details from the error response
      res.status(error.response.status || 500).json({ error: error.message });
    } else {
      // Generic error response if the error structure is unknown
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
}
