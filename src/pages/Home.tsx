import ContactButton from '@/components/ContactButton';
import Intro from '@/components/Intro/Intro';
import IntroMenu from '@/components/Intro/IntroMenu';
import Promise from '@/components/Main/Promise';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

// axios.defaults.baseURL = 'https://localhost/api';

export default function Home() {
  const [endState, setEndState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEndState(true);
    }, 6500);
  }, []);

  return (
    <>
      <header>
        <Intro />
      </header>
      <Main isProgressBarEnd={endState}>
        <IntroMenu />
        <Promise />
        <ContactButton />
      </Main>
    </>
  );
}

const Main = styled.main<{ isProgressBarEnd: boolean }>`
  transition: display 2s ease-in-out;
  display: ${(props) => (props.isProgressBarEnd ? 'block' : 'none')};
`;
