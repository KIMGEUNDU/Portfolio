import ContactButton from '@/components/ContactButton';
import IntroMenu from '@/pages/IntroMenu';
import AboutMe from '@/pages/AboutMe';
import Promise from '@/pages/Promise';
import NavBar from '@/components/NavBar';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import IThink from '@/pages/IThink';
import IThinkDeveloper from '@/pages/IThinkDeveloper';
import IThinkWorry from '@/pages/IThinkWorry';
import Skill from '@/pages/Skill';
import Contact from '@/pages/Contact';
import Project from '@/pages/Project';
import { FullPage, Slide } from 'react-full-page';

function Main() {
  const [endState, setEndState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEndState(true);
    }, 6500);
  }, []);

  return (
    <Wrapper $progressBarEnd={endState}>
      <FullPage duration={500}>
        <Slide>
          <IntroMenu />
        </Slide>
        <Slide>
          <Promise />
        </Slide>
        <Slide>
          <AboutMe />
        </Slide>
        <Slide>
          <IThink />
        </Slide>
        <Slide>
          <IThinkDeveloper />
        </Slide>
        <Slide>
          <IThinkWorry />
        </Slide>
        <Slide>
          <Skill />
        </Slide>
        <Slide>
          <Project />
        </Slide>
        <Slide>
          <Contact />
        </Slide>
      </FullPage>
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
