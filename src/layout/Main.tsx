import ContactButton from '@/components/ContactButton';
import IntroMenu from '@/components/Intro/IntroMenu';
import Promise from '@/components/Main/Promise';
import NavBar from '@/components/NavBar';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function Main() {
  const [endState, setEndState] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // window 스크롤 이벤트

  function handleScroll(e: WheelEvent) {
    e.preventDefault();

    if (window.scrollY === 0) {
      return;
    }

    const delta = e.deltaY;
    const windowHeight = window.innerHeight;

    if (delta > 0) {
      setScrollPosition(scrollPosition + windowHeight);
    } else {
      setScrollPosition(windowHeight - scrollPosition);
    }

    window.scrollTo({
      top: scrollPosition + windowHeight,
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
    <Wrapper isProgressBarEnd={endState}>
      <IntroMenu />
      <Promise />
      <NavBar />
      <ContactButton />
    </Wrapper>
  );
}

const Wrapper = styled.main<{ isProgressBarEnd: boolean }>`
  transition: display 2s ease-in-out;
  display: ${(props) => (props.isProgressBarEnd ? 'block' : 'none')};
`;

export default Main;
