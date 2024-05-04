import { ComponentPropsWithRef, FC } from 'react';
import Popup from 'reactjs-popup';
import HandIco from '../../../assets/hand.svg';
import CopyIco from '../../../assets/copy.svg';
import TuningIco from '../../../assets/tuning.svg';
import ActionMenu from '../ActionMenu/ActionMenu.component';
import useStore from '../../../store/store';
import { IReaction } from '../../../types/store.types';
import css from './InteractionIcons.module.scss';

interface IProps extends ComponentPropsWithRef<'div'> {
  handleCopy: () => void;
  idx: number;
}

const InteractionIcons: FC<IProps> = ({ handleCopy, idx }) => {
  const { toggleDisLike, toggleLike, messages } = useStore();
  const currentMessage = messages[idx];

  const handleLikeToggle = () => {
    toggleLike(idx);
  };

  const handleDisLikeToggle = () => {
    toggleDisLike(idx);
  };

  const actions = (
    <ul className={css['copilot-message__icons-lits']}>
      <li>
        <button
          onClick={handleLikeToggle}
          type="button"
          className={`${css['interactive-button']} ${
            css['interactive-button--reverse']
          } ${
            currentMessage.reaction === IReaction.LIKE
              ? css['interactive-button--success']
              : ''
          }`}
        >
          <img src={HandIco} alt="Like icon" />
        </button>
      </li>
      <li>
        <button
          onClick={handleDisLikeToggle}
          type="button"
          className={`${css['interactive-button']} ${
            currentMessage.reaction === IReaction.DISLIKE
              ? css['interactive-button--error']
              : ''
          }`}
        >
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
          <ActionMenu currentMessage={currentMessage} />
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
