import { ComponentPropsWithoutRef, FC } from 'react';
import MinimizeIco from '../../../assets/minimize.svg';
import MaximizeIco from '../../../assets/maximize.svg';
import HamburgerIco from '../../../assets/hamburger.svg';
import BallonIco from '../../../assets/ballon.svg';
import SuitcaseIco from '../../../assets/suitcase.svg';
import { useChatGPTQuery } from '../../../hooks/useChatGPTQuery';
import { IStoreMessage } from '../../../types/store.types';
import { decreaseByHalf, increaseByHalf } from '../../../utils/utils';
import css from './ActionMenu.module.scss';

interface IProps extends ComponentPropsWithoutRef<'div'> {
  currentMessage: IStoreMessage;
}

const ActionMenu: FC<IProps> = ({ currentMessage }) => {
  const { mutate: postRequest } = useChatGPTQuery(
    currentMessage.token.toString()
  );

  const changeResponse = (
    field: keyof Pick<IStoreMessage, 'token'>,
    decorator: (num: number) => number
  ) => {
    return () =>
      postRequest([
        {
          ...currentMessage,
          [field]: decorator(currentMessage[field]),
        },
      ]);
  };

  const changeTemperatureOfResponse = () => {
    // UNFORTUNATELY THIS API NOT SUPPORT THIS FUNCTIONAL
    postRequest([currentMessage]);
  };
  return (
    <ul aria-label="Modify:" className={css['action-menu']}>
      <li>
        <button
          onClick={changeResponse('token', decreaseByHalf)}
          type="button"
          className={css['action-menu__button']}
        >
          <img src={MinimizeIco} alt="Minimize ico" />
          <span>Shorter</span>
        </button>
      </li>
      <li>
        <button
          onClick={changeResponse('token', increaseByHalf)}
          type="button"
          className={css['action-menu__button']}
        >
          <img src={MaximizeIco} alt="Maximize ico" />
          <span>Longer</span>
        </button>
      </li>
      <li>
        <button
          onClick={changeTemperatureOfResponse}
          type="button"
          className={css['action-menu__button']}
        >
          <img src={HamburgerIco} alt="Hamburger ico" />
          <span>Simpler</span>
        </button>
      </li>
      <li>
        <button
          onClick={changeTemperatureOfResponse}
          type="button"
          className={css['action-menu__button']}
        >
          <img src={BallonIco} alt="Ballon ico" />
          <span>Casual</span>
        </button>
      </li>
      <li>
        <button
          onClick={changeTemperatureOfResponse}
          type="button"
          className={css['action-menu__button']}
        >
          <img src={SuitcaseIco} alt="Suitcase ico" />
          <span>Professional</span>
        </button>
      </li>
    </ul>
  );
};

export default ActionMenu;
