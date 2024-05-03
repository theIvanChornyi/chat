import { ComponentPropsWithRef, FC } from 'react';
import Popup from 'reactjs-popup';
import HandIco from '../../assets/hand.svg';
import CopyIco from '../../assets/copy.svg';
import TuningIco from '../../assets/tuning.svg';

import css from '../CopilotChat.module.scss';
import ActionMenu from './ActionMenu.component';

interface IProps extends ComponentPropsWithRef<'div'> {
  handleCopy: () => void;
}

const InteractionIcons: FC<IProps> = ({ handleCopy }) => {
  const actions = (
    <ul className={css['copilot-message__icons-lits']}>
      <li>
        <button
          type="button"
          className={`${css['interactive-button']} ${css['interactive-button--reverse']}`}
        >
          <img src={HandIco} alt="Like icon" />
        </button>
      </li>
      <li>
        <button type="button" className={css['interactive-button']}>
          <img src={HandIco} alt="Dislike icon" />
        </button>
      </li>
      <li>
        <Popup
          arrow={false}
          trigger={
            <button type="button" className={css['interactive-button']}>
              <img src={TuningIco} alt="Tuning icon" />
            </button>
          }
          position={['right top', 'top center', 'bottom right', 'bottom left']}
        >
          <ActionMenu />
        </Popup>
      </li>
    </ul>
  );

  return (
    <ul className={css['copilot-message__icons-lits']}>
      <li>{actions}</li>
      <li>
        <button
          type="button"
          onClick={handleCopy}
          className={css['interactive-button']}
        >
          <img src={CopyIco} alt="Copy icon" />
        </button>
      </li>
    </ul>
  );
};

export default InteractionIcons;
