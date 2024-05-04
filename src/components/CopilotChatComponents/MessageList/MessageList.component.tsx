import { ComponentPropsWithRef, FC, useEffect, useMemo, useRef } from 'react';
import { useIsMutating } from '@tanstack/react-query';
import loader from '../../../assets/loader.gif';
import { QUERY_KEYS } from '../../../const/query-keys.const';
import useStore from '../../../store/store';
import { IChatRole } from '../../../types/chat-api.types';
import ChatGPTMessage from '../ChatGPTMessage/ChatGPTMessage.component';
import css from './MessageList.module.scss';

interface IProps extends ComponentPropsWithRef<'div'> {}

const MessageList: FC<IProps> = () => {
  const containerRef = useRef<HTMLUListElement>(null);
  const { messages } = useStore();

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages.length]);

  const isLoading =
    useIsMutating({
      mutationKey: [QUERY_KEYS.PROMPT],
    }) === 1;

  const messagesItems = useMemo(
    () =>
      messages.map(({ content, role }, i) => {
        return role === IChatRole.USER ? (
          <li
            key={`role ${i}`}
            className={`${css['user-message']} font-message`}
          >
            {content}
          </li>
        ) : (
          <ChatGPTMessage
            scrollToBottom={scrollToBottom}
            idx={i}
            key={`role ${i}`}
          >
            {content}
          </ChatGPTMessage>
        );
      }),
    [messages]
  );
  return (
    <ul ref={containerRef} className={css['message-list']}>
      {messagesItems}
      {isLoading && (
        <li className={css.loader}>
          <p>Copilot is thinking...</p>
          <img src={loader} alt="three dots rotate" />
        </li>
      )}
    </ul>
  );
};

export default MessageList;
