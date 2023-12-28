import { useContactView } from '@/store/useContactView';
import aboutMe from 'assets/aboutMe.png';
import ithink from 'assets/ithink.png';
import project from 'assets/project.png';
import skill from 'assets/skill.png';
import { useEffect } from 'react';
import styled from 'styled-components';
import MenuBarItem from './MenuBarItem';

function IntroMenu() {
  const { setView } = useContactView();

  useEffect(() => {
    setTimeout(() => {
      setView(true);
    }, 8000);
  }, []);

  return (
    <Wrapper id="IntroMenu">
      <MenuBarItem link="#" img={aboutMe}>
        About Me
      </MenuBarItem>
      <MenuBarItem link="#" img={ithink} delayTime={1.5}>
        I Think
      </MenuBarItem>
      <MenuBarItem link="#" img={skill} delayTime={2}>
        Skill
      </MenuBarItem>
      <MenuBarItem link="#" img={project} delayTime={2.5}>
        Project
      </MenuBarItem>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.themeColor.yellow};
  width: 100vw;
  height: 100vh;
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
`;

export default IntroMenu;
