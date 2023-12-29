import ContactButton from '@/components/ContactButton';
import IntroMenu from '@/pages/IntroMenu';
import AboutMe from '@/pages/AboutMe';
import Promise from '@/pages/Promise';
import NavBar from '@/components/NavBar';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import IThink from '@/pages/IThink';

function Main() {
  const [endState, setEndState] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // window 스크롤 이벤트
  function handleScroll(e: WheelEvent) {
    e.preventDefault();

    const delta = e.deltaY;
    const windowHeight = window.innerHeight;

    if (delta > 0) {
      setScrollPosition(scrollPosition + windowHeight);
    } else {
      if (window.scrollY === 0) {
        return;
      } else {
        setScrollPosition(scrollPosition - windowHeight);
      }
    }

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  }

  window.addEventListener('wheel', handleScroll, { passive: false });

  useEffect(() => {
    setTimeout(() => {
      setEndState(true);
    }, 6500);
  }, []);

  return (
    <Wrapper $progressBarEnd={endState}>
      <IntroMenu />
      <Promise />
      <AboutMe />
      <IThink />
      <NavBar />
      <ContactButton />
    </Wrapper>
  );
}

const Wrapper = styled.main<{ $progressBarEnd: boolean }>`
  transition: display 2s ease-in-out;
  display: ${(props) => (props.$progressBarEnd ? 'block' : 'none')};
`;

export default Main;
