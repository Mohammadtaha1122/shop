import axios from "axios";

export const userApi = axios.get('https://jsonplaceholder.typicode.com/photos')

export const chatApi = axios.get('https://dummyjson.com/posts?limit=5')