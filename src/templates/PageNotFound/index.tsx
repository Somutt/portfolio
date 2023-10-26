import * as Styled from './styles';
import Link from 'next/link';

export const PageNotFound = () => {
  return (
    <Styled.Container>
      <h2>
        A página que procura não foi encontrada |{' '}
        <Link href='/'>Clique aqui para retornar</Link>
      </h2>
    </Styled.Container>
  );
};
