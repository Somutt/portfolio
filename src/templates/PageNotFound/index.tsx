import * as Styled from './styles';
import Link from 'next/link';

export const PageNotFound = () => {
  return (
    <Styled.Container>
      <h2>
        The page you wanted was not found |{' '}
        <Link href='/'>Click here to go back!</Link>
      </h2>
    </Styled.Container>
  );
};
