export interface IStore {
  isChatStarted: boolean;
  request:string
  setChatStarted(): void;
  setChatClosed(): void;
  setRequest(request:string): void;
}