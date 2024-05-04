import { useEnhancedMutation } from "./useEnhancedMutation";
import useStore from "../store/store";
import { IChatResponse, IChatRole } from "../types/chat-api.types";
import chatApi from '../services/chat.service';
import { QUERY_KEYS } from "../const/query-keys.const";

export const useChatGPTQuery = (key:string = '',) => {
  const { addMessage } = useStore();
  const onSuccess = ({ choices, usage }: IChatResponse): void => {
    addMessage({
      role: IChatRole.ASSISTANT,
      content: choices[0].message.content,
      token: usage.completion_tokens,
    });
  };
  const mutation = useEnhancedMutation({
    mutationFn: chatApi.postRequest,
    mutationKey: [QUERY_KEYS.PROMPT,key],
    onSuccess,
  })

  return mutation
}