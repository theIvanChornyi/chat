export enum IChatRole {
  USER = 'user',
  ASSISTANT = 'assistant'
}

export interface IChatResponse {
  choices: Array<IChatChoice>
  usage:IUsage
}

export interface IChatChoice {
  message: IChatMessage
}

export interface IChatMessage {
  role: IChatRole,
  content: string,
  token: number
}

export interface IUsage {
  completion_tokens: number
  prompt_tokens: number
}