import { ComponentPropsWithRef, FC, useCallback, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import InteractionIcons from '../InteractionIcons/InteractionIcons.component';
import { useCopyToClipboard } from '../../../hooks/useCopyToClipboard';
import css from './ChatGPTMessage.module.scss';

interface IProps extends ComponentPropsWithRef<'li'> {
  idx: number;
  scrollToBottom: () => void;
}

const ChatGPTMessage: FC<IProps> = ({ children, idx, scrollToBottom }) => {
  const [copy] = useCopyToClipboard();
  const handleCopy = useCallback(() => {
    if (typeof children !== 'string') return;
    copy(children);
  }, [children, copy]);
  const parentRef = useRef<HTMLLIElement>(null);
  return (
    <li ref={parentRef} className={`${css['copilot-message']} font-message`}>
      {typeof children === 'string' && (
        <TypeAnimation
          splitter={str => str.split(/(?= )/)}
          sequence={[scrollToBottom, children, scrollToBottom]}
          cursor={false}
        />
      )}
      <InteractionIcons idx={idx} handleCopy={handleCopy} />
    </li>
  );
};

export default ChatGPTMessage;
