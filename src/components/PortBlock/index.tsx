import * as Styled from './styles';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faSafari } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type PortBlockProps = {
  img: StaticImageData;
  live: string;
  src: string;
  title: string;
};

export const PortBlock = ({ img, live, src, title }: PortBlockProps) => {
  return (
    <Styled.Container>
      <Image src={img} alt='mockup' />
      <h2>{title}</h2>
      <div className='portfolio'>
        <Link href={live} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faSafari} />
          <span>Live Demo</span>
        </Link>
        <Link href={src} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faCode} />
          <span>Source Code</span>
        </Link>
      </div>
    </Styled.Container>
  );
};
