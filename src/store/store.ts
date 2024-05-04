import { create } from 'zustand';
import {
	persist,
} from 'zustand/middleware'
import { STORE_KEYS } from '../const/store-keys.const';
import { IReaction, IStore } from '../types/store.types';
import { IChatMessage } from '../types/chat-api.types';

const useStore = create<IStore>()(persist((set) => {
  return {
    isChatStarted: false,
    messages:[],
    setChatStarted: (): void => {
      set(() => {
        return {isChatStarted:true}
      })
    },
    setChatClosed: (): void => {
      set(() => {
        return {isChatStarted:false}
      })
    },
    addMessage: (request:IChatMessage): void => {
      set((store) => {
        return {messages: [...store.messages, {...request, reaction: IReaction.NEUTRAL}]}
      })
    },
    resetMessages: (): void => {
      set(() => {
        return {messages: []}
      })
    },
    toggleLike: (id:number): void => {
      set(store => {
        return {
          messages: [
            ...store.messages.map((message, i) => {
              return i !== id ? message :
              {...message, reaction: message.reaction === IReaction.LIKE ? IReaction.NEUTRAL : IReaction.LIKE}
            }),
          ],
        };
      });
    },
    toggleDisLike: (id:number): void => {
      set(store => {
        return {
          messages: [
            ...store.messages.map((message, i) => {
              return i !== id ? message :
              {...message, reaction: message.reaction === IReaction.DISLIKE ? IReaction.NEUTRAL : IReaction.DISLIKE}
            }),
          ],
        };
      })
      
    }
  };
}, {
  name:STORE_KEYS.CHAT
}));

export default useStore;
