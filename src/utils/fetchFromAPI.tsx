import axios, {AxiosRequestConfig} from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options: AxiosRequestConfig = {
	params: {
		maxResults: '50',
		type: 'video,channel'
	},
	headers: {
		'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY!,
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

export const fetchFromAPI = async (url: string) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options)
	return data
} 