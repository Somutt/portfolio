import * as Styled from './styles';
import { PortBlock } from '../../components/PortBlock';
import { portfolio } from '../../data/portfolio';

export const Portfolio = () => {
  return (
    <Styled.Container>
      {portfolio.map((el, index) => (
        <PortBlock
          key={index}
          img={el.image}
          live={el.live}
          src={el.source}
          title={el.title}
        />
      ))}
    </Styled.Container>
  );
};
