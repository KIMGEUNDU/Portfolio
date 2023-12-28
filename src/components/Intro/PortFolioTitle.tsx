import styled, { keyframes } from 'styled-components';

function PortfolioTitle() {
  const title = 'GEONJU&PORTFOLIO';

  return (
    <Wrapper>
      {[...title].map((letter, i) => (
        <LetterItem
          key={i}
          style={{
            animationDelay: `${3 + i * 0.1}s`,
            color: `${i === 6 ? 'transparent' : ''}`,
          }}
        >
          {letter}
        </LetterItem>
      ))}
    </Wrapper>
  );
}
// 애니메이션
const appearLetter = keyframes`
    0% { transform: translateY(100%); }
  90% { opacity: 1; transform: translateY(0); }
  100%{ transform: translateY(100%); }
`;

const Wrapper = styled.div`
  overflow: hidden;
  margin: 40px 0;
  height: 70px;
  font-size: 60px;
  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;

const LetterItem = styled.span`
  opacity: 0;
  display: inline-block;
  animation: ${appearLetter} 2s forwards;
`;

export default PortfolioTitle;
