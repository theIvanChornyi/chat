import { ComponentPropsWithRef, FC } from 'react';
import css from '../CopilotChat.module.scss';

interface IProps extends ComponentPropsWithRef<'div'> {
  copilotComponent: React.ComponentType<ComponentPropsWithRef<'li'>>;
}

const MessageList: FC<IProps> = ({
  children,
  copilotComponent: CopilotMessage,
}) => {
  return (
    <ul className={css['message-list']}>
      <li className={css['user-message']}>
        What will our financial state would be if we bought this name of company
      </li>

      <CopilotMessage>
        here are some potential high-level considerations: Amazon is a massive
        company, with a market capitalization of over $1 trillion. Acquiring
        Amazon would be an enormous financial undertaking likely requiring
        significant debt and dilution of Intel shareholders. On the positive
        side, acquiring Amazon would give Intel access to Amazon's highly
        profitable cloud computing business AWS, which could provide a new
        revenue stream. There could also be opportunities to leverage synergies
        between the companies' technologies. However, Amazon's core
        retail/ecommerce business has lower margins than Intel's semiconductor
        business. So absorbing this could negatively impact Intel's profit
        margins unless costs can be significantly reduced.
      </CopilotMessage>

      <li className={css['user-message']}>
        What will our financial state would be if we bought this name of company
      </li>

      {children}
    </ul>
  );
};

export default MessageList;
