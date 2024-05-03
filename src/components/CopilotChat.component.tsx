import { ComponentPropsWithRef, FC } from 'react';
import ChatWindow from './CopilotChatComponents/ChatWindow.component';
import MessageInput from './CopilotChatComponents/MessageInput.component';
import MessageList from './CopilotChatComponents/MessageList.component';
import ChatGPTMessage from './CopilotChatComponents/ChatGPTMessage.component';

import css from './CopilotChat.module.scss';
import useStore from '../store/store';

interface IProps extends ComponentPropsWithRef<'div'> {}

const CopilotChat: FC<IProps> = () => {
  const { setChatClosed, isChatStarted } = useStore();
  return (
    <div className={css.container}>
      <header className={css.header}>
        <h1 className={css.title}>Financial Copilot Chat</h1>
        <button
          disabled={!isChatStarted}
          onClick={setChatClosed}
          type="button"
          className={css.header__button}
        />
      </header>
      <ChatWindow>
        {isChatStarted && <MessageList copilotComponent={ChatGPTMessage} />}
        {!isChatStarted && <MessageInput />}
      </ChatWindow>
    </div>
  );
};

export default CopilotChat;
