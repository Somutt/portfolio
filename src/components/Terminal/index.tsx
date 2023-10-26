import * as Styled from './styles';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

type TerminalProps = {
  text: React.ReactNode;
};

export const Terminal = ({ text = '' }: TerminalProps) => {
  const icon = faCircle;

  return (
    <Styled.Container className='terminal-container'>
      <div className='topBorder'>
        <FontAwesomeIcon icon={icon} />
        <FontAwesomeIcon icon={icon} />
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className='terminal'>{text}</div>
    </Styled.Container>
  );
};
