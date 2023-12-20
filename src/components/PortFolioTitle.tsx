import styled, { keyframes } from 'styled-components';

function PortFolioTitle() {
  const title = 'GEONJU&PORTFOLIO';

  return (
    <Wrapper>
      {[...title].map((letter, i) => (
        <LetterItem
          key={i}
          style={{
            animationDelay: `${i * 0.1}s`,
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
  100% { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.div`
  overflow: hidden;
  margin: 40px 0;
  height: 70px;
  font-size: 70px;
`;

const LetterItem = styled.span`
  opacity: 0;
  display: inline-block;
  animation: ${appearLetter} 1s forwards;
`;

export default PortFolioTitle;
