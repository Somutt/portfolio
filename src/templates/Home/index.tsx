import * as Styled from './styles';
import Image from 'next/image';
import avatar from '../../../media/ava-no-bg-crop.png';
import { Bio } from '../../components/Bio';
import { bio } from '../../data/bio';
import { Socials } from '../../components/Socials';

export const Home = () => {
  return (
    <Styled.Main>
      <div className='avatar-container'>
        <Image className='avatar' src={avatar} alt='Picture of the author' />
      </div>
      <div>
        <h2>
          Hi, i&apos;m <span className='devName'>Samuel</span>{' '}
          <span className='hand'>🤚</span>
        </h2>
        <h1>Front-End Developer.</h1>
        <ul>
          {bio.map((element, index) => (
            <Bio
              key={index}
              emoji={element.emoji}
              text={element.description}
              label={element.emojiDescription}
              link={element.link}
            />
          ))}
        </ul>
        <Socials />
      </div>
    </Styled.Main>
  );
};
