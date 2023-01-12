import { API_URL, REACT_APP_API_KEY } from "./constants";

export const generateApiSearchUrl = path => `${API_URL}search/${path}`;
export const generateApiDetailsUrl = path => `${API_URL}appDetail/${path}`;

export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${REACT_APP_API_KEY}`,
		'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
	}
};