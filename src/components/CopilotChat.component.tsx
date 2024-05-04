import { ComponentPropsWithRef, FC } from 'react';
import ChatWindow from './CopilotChatComponents/ChatWindow/ChatWindow.component';
import MessageInput from './CopilotChatComponents/MessageInput/MessageInput.component';
import MessageList from './CopilotChatComponents/MessageList/MessageList.component';

import css from './CopilotChat.module.scss';
import useStore from '../store/store';

interface IProps extends ComponentPropsWithRef<'div'> {}

const CopilotChat: FC<IProps> = () => {
  const { setChatClosed, isChatStarted, resetMessages } = useStore();

  const onClick = () => {
    setChatClosed();
    resetMessages();
  };
  return (
    <div className={css.container}>
      <header className={css.header} data-testid="page-header">
        <h1 data-testid="page-title" className={css.title}>
          Financial Copilot Chat
        </h1>
        <button
          disabled={!isChatStarted}
          onClick={onClick}
          type="button"
          className={css.header__button}
        />
      </header>
      <ChatWindow>
        {isChatStarted && <MessageList />}
        {!isChatStarted && <MessageInput />}
      </ChatWindow>
    </div>
  );
};

export default CopilotChat;
