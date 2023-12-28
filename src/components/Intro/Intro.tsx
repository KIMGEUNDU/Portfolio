import styled from 'styled-components';
import ProgressBar from './ProgressBar';
import PortFolioTitle from './PortFolioTitle';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';

function Intro() {
  const [endState, setEndState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEndState(true);
    }, 6500);
  }, []);

  return (
    <>
      <Helmet>
        <title>Intro</title>
      </Helmet>
      <Wrapper isProgressBarEnd={endState}>
        <Container>
          <ProgressBar />
          <PortFolioTitle />
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div<{ isProgressBarEnd: boolean }>`
  background: ${(props) => props.theme.themeColor.brown};
  width: 100vw;
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: height 2s ease-in-out;
  height: ${(props) => (props.isProgressBarEnd ? '0' : '100vh')};
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default Intro;
