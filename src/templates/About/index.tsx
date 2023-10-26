import * as Styled from './styles';
import { Terminal } from '../../components/Terminal';
import { info } from '../../data/info';

export const About = () => {
  const aboutMeText = () => {
    return (
      <>
        <p>
          <span>samuelmoura$ </span>cat aboutsamuel
        </p>
        <p>
          <span>
            aboutsamuel <span>(main)</span>${' '}
          </span>
          {info.bio}
        </p>
      </>
    );
  };

  const skillsText = () => {
    return (
      <>
        <p>
          <span>samuelmoura$ </span> cd proficiencies/tools
        </p>
        <p>
          <span>
            proficiencies/tools <span>(main)</span>$
          </span>{' '}
          ls
        </p>
        <p>
          <span>Proficiencies</span>
        </p>
        <ul className='skills'>
          {info.proficiencies.map((profi, index) => (
            <li key={index}>{profi.toLowerCase()}</li>
          ))}
        </ul>
      </>
    );
  };

  const hobbiesText = () => {
    return (
      <>
        <p>
          <span>samuelmoura$</span> cd hobbies/interests
        </p>
        <p>
          <span>
            hobbies/interests <span>(main)</span>$
          </span>{' '}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <span>{hobby.emoji}</span>
              {hobby.description}
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <Styled.Container>
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={hobbiesText()} />
    </Styled.Container>
  );
};
