import * as Styled from './styles';

export type TogglerProps = {
  darkMode: boolean;
  handleClick: (event: React.MouseEvent<HTMLSpanElement>) => void;
};

export const Toggler = ({ darkMode, handleClick }: TogglerProps) => {
  return (
    <Styled.Toggler
      onClick={handleClick}
      role='img'
      aria-label={
        darkMode
          ? 'Full Moon, click to disable dark mode'
          : 'New Moon, click do enable dark mode'
      }
    >
      {darkMode ? '🌕' : '🌑'}
    </Styled.Toggler>
  );
};
