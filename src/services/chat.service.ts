import axios, { Axios, AxiosResponse } from 'axios';
import { IChatMessage, IChatResponse } from '../types/chat-api.types';

export class ChatAPIService {
  private axios: Axios;
  constructor() {
    this.axios = axios.create({
      baseURL: import.meta.env.VITE_CHAT_API_BASE_URL,
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_CHAT_API_SECRET,
        'X-RapidAPI-Host': import.meta.env.VITE_CHAT_API_HOST,
      },
    });
  }

  public postRequest = async (
    query: Array<IChatMessage>
  ): Promise<AxiosResponse<IChatResponse>> => {
    return this.axios.post<IChatResponse>('/', {
      model: import.meta.env.VITE_CHAT_MODEL,
      messages: query,
    },);
  }
}

export default new ChatAPIService();
