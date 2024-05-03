import { ComponentPropsWithRef, FC, useCallback, useRef } from 'react';
import InteractionIcons from './InteractionIcons.component';
import css from '../CopilotChat.module.scss';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';

interface IProps extends ComponentPropsWithRef<'li'> {}

const ChatGPTMessage: FC<IProps> = ({ children }) => {
  const [copy] = useCopyToClipboard();
  const handleCopy = useCallback(() => {
    if (typeof children !== 'string') return;
    copy(children);
  }, [children, copy]);
  const parentRef = useRef<HTMLLIElement>(null);
  return (
    <li ref={parentRef} className={css['copilot-message']}>
      {children}
      <InteractionIcons handleCopy={handleCopy} />
    </li>
  );
};

export default ChatGPTMessage;
