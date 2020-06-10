import axios from 'axios'

// Enter your Youtube API key right here
const API_KEY = ''

export const baseParams = {
	part: 'snippet',
	maxResults: 5,
	type: 'video',
	key: API_KEY,
}

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
})