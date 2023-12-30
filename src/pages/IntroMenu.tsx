import { useContactView } from '@/store/useContactView';
import aboutMe from 'assets/aboutMe.png';
import ithink from 'assets/ithink.png';
import project from 'assets/project.png';
import skill from 'assets/skill.png';
import { useEffect } from 'react';
import styled from 'styled-components';
import MenuBarItem from '../components/Intro/MenuBarItem';

function IntroMenu() {
  const { setView } = useContactView();

  function movePage(id: string) {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    setTimeout(() => {
      setView(true);
    }, 8000);
  }, []);

  return (
    <Wrapper
      id="IntroMenu"
      draggable={true}
      onDragStart={(e) => {
        e.preventDefault();
      }}
    >
      <MenuBarItem img={aboutMe} onClick={() => movePage('AboutMe')}>
        About Me
      </MenuBarItem>
      <MenuBarItem
        img={ithink}
        delayTime={1.5}
        onClick={() => movePage('IThink')}
      >
        I Think
      </MenuBarItem>
      <MenuBarItem img={skill} delayTime={2} onClick={() => movePage('Skill')}>
        Skill
      </MenuBarItem>
      <MenuBarItem
        img={project}
        delayTime={2.5}
        onClick={() => movePage('Project')}
      >
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
