import * as Styled from './styles';

type BioProps = {
  emoji: string;
  text: string;
  label: string;
  link?: string;
};

export const Bio = ({ emoji, text, label, link = '' }: BioProps) => {
  return (
    <Styled.Bio>
      <span aria-label={label} role='img'>
        {emoji}
      </span>
      {link ? (
        <a target='_blank' rel='noreferrer' href={link}>
          {text}
        </a>
      ) : (
        text
      )}
    </Styled.Bio>
  );
};
