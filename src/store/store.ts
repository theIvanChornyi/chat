import { create } from 'zustand';
import {
	persist,
} from 'zustand/middleware'
import { STORE_KEYS } from '../const/store-keys.const';
import { IStore } from './store.types';

const useStore = create<IStore>()(persist((set) => {
  return {
    isChatStarted: false,
    request:'',
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
    setRequest: (request:string): void => {
      set(() => {
        return {request}
      })
    }
  };
}, {
  name:STORE_KEYS.CHAT
}));

export default useStore;
