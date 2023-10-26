import * as Styled from './styles';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { socials } from '../../data/socials';
config.autoAddCss = false;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Socials = () => {
  return (
    <Styled.Container>
      {socials.map((social, index) => (
        <a
          key={index}
          target='_blank'
          rel='noopener noreferrer'
          href={social.link}
        >
          <FontAwesomeIcon icon={social.icon} />
        </a>
      ))}
    </Styled.Container>
  );
};
