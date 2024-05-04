import { IChatMessage } from './chat-api.types';

export enum IReaction {
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE',
  NEUTRAL = 'NEUTRAL',
}

export interface IStoreMessage extends IChatMessage {
  reaction: IReaction;
}

export interface IStore {
  isChatStarted: boolean;
  messages: Array<IStoreMessage>;
  setChatStarted: () => void;
  setChatClosed: () => void;
  addMessage: (request: Omit<IStoreMessage,'reaction'>) => void;
  resetMessages: () => void;
  toggleLike: (idx:number) => void;
  toggleDisLike: (idx:number) => void;
}
