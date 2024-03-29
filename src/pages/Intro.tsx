import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProgressBar from '@/components/Intro/ProgressBar';
import PortfolioTitle from '@/components/Intro/PortFolioTitle';

function Intro() {
  const [endState, setEndState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEndState(true);
    }, 6500);
  }, []);

  return (
    <Wrapper
      $progressBarEnd={endState}
      draggable={true}
      onDragStart={(e) => {
        e.preventDefault();
      }}
    >
      <Container>
        <ProgressBar />
        <PortfolioTitle />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $progressBarEnd: boolean }>`
  background: ${(props) => props.theme.themeColor.brown};
  width: 100vw;
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: height 2s ease-in-out;
  height: ${(props) => (props.$progressBarEnd ? '0' : '100vh')};
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default Intro;
