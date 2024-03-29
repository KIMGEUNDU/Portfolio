import { useContactView } from '@/store/useContactView';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function NavBar() {
  const { view } = useContactView();
  const [bg, setBg] = useState('yellow');
  const [currentNavItem, setCurrentNavItem] = useState('IntroMenu');
  const [remain, setRemain] = useState('#F8BAA0');

  const handleNavItemClick = (id: string) => {
    setCurrentNavItem(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (e) => {
        e.forEach((v) => {
          if (v.isIntersecting) {
            setCurrentNavItem(v.target.id);

            switch (v.target.id) {
              case 'IntroMenu':
                setBg('yellow');
                setRemain('#F8BAA0');
                break;

              case 'Promise':
                setBg('pink');
                setRemain('#FFFFFF');
                break;

              case 'AboutMe':
                setBg('yellow');
                setRemain('#F8BAA0');
                break;

              case 'IThink':
                setBg('white');
                setRemain('#F8BAA0');
                break;

              case 'IThinkDeveloper':
                setBg('brown');
                setRemain('#F8BAA0');
                break;

              case 'IThinkWorry':
                setBg('yellow');
                setRemain('#F8BAA0');
                break;

              case 'Skill':
                setBg('white');
                setRemain('#F8BAA0');
                break;

              case 'Contact':
                setBg('pink');
                setRemain('#FFFFFF');
                break;

              case 'Project':
                setBg('brown');
                setRemain('#F8BAA0');
                break;
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const IntroPage = document.getElementById('IntroMenu');
    const PromisePage = document.getElementById('Promise');
    const AboutMePage = document.getElementById('AboutMe');
    const IThinkPage = document.getElementById('IThink');
    const IThinkDeveloperPage = document.getElementById('IThinkDeveloper');
    const IThinkWorryPage = document.getElementById('IThinkWorry');
    const SkillPage = document.getElementById('Skill');
    const ProjectPage = document.getElementById('Project');
    const ContactPage = document.getElementById('Contact');

    if (
      IntroPage &&
      PromisePage &&
      AboutMePage &&
      IThinkPage &&
      IThinkDeveloperPage &&
      IThinkWorryPage &&
      SkillPage &&
      ContactPage &&
      ProjectPage
    ) {
      observer.observe(IntroPage);
      observer.observe(PromisePage);
      observer.observe(AboutMePage);
      observer.observe(IThinkPage);
      observer.observe(IThinkDeveloperPage);
      observer.observe(IThinkWorryPage);
      observer.observe(SkillPage);
      observer.observe(ProjectPage);
      observer.observe(ContactPage);
    }
  }, []);

  return (
    <Wrapper $appear={view}>
      <NavItem
        id="navItem"
        $current={currentNavItem === 'IntroMenu'}
        $currentbg={bg}
        $bg={remain}
        onClick={() => handleNavItemClick('IntroMenu')}
      >
        <NavItemTitle $current={currentNavItem === 'IntroMenu'}>
          Intro Menu
        </NavItemTitle>
      </NavItem>
      <NavItem
        id="navItem"
        $current={currentNavItem === 'Promise'}
        $currentbg={bg}
        $bg={remain}
        onClick={() => handleNavItemClick('Promise')}
      >
        <NavItemTitle $current={currentNavItem === 'Promise'}>
          Promise
        </NavItemTitle>
      </NavItem>
      <NavItem
        id="navItem"
        $current={currentNavItem === 'AboutMe'}
        $currentbg={bg}
        $bg={remain}
        onClick={() => handleNavItemClick('AboutMe')}
      >
        <NavItemTitle $current={currentNavItem === 'AboutMe'}>
          About Me
        </NavItemTitle>
      </NavItem>
      <NavItem
        id="navItem"
        $current={
          currentNavItem === 'IThink' ||
          currentNavItem === 'IThinkDeveloper' ||
          currentNavItem === 'IThinkWorry'
        }
        $currentbg={bg}
        $bg={remain}
        onClick={() => handleNavItemClick('IThink')}
      >
        <NavItemTitle
          $current={
            currentNavItem === 'IThink' ||
            currentNavItem === 'IThinkDeveloper' ||
            currentNavItem === 'IThinkWorry'
          }
        >
          I Think
        </NavItemTitle>
      </NavItem>
      <NavItem
        id="navItem"
        $current={currentNavItem === 'Skill'}
        $currentbg={bg}
        $bg={remain}
        onClick={() => handleNavItemClick('Skill')}
      >
        <NavItemTitle $current={currentNavItem === 'Skill'}>Skill</NavItemTitle>
      </NavItem>
      <NavItem
        id="navItem"
        $current={currentNavItem === 'Project'}
        $currentbg={bg}
        $bg={remain}
        onClick={() => handleNavItemClick('Project')}
      >
        <NavItemTitle $current={currentNavItem === 'Project'}>
          Project
        </NavItemTitle>
      </NavItem>
      <NavItem
        id="navItem"
        $current={currentNavItem === 'Contact'}
        $currentbg={bg}
        $bg={remain}
        onClick={() => handleNavItemClick('Contact')}
      >
        <NavItemTitle $current={currentNavItem === 'Contact'}>
          Contact
        </NavItemTitle>
      </NavItem>
    </Wrapper>
  );
}

const Wrapper = styled.nav<{ $appear: boolean }>`
  opacity: ${(props) => (props.$appear ? '1' : '0')};
  visibility: ${(props) => (props.$appear ? 'visible' : 'hidden')};
  transition: opacity 2s, visibility 2s;
  position: fixed;
  top: 50%;
  right: 1%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media ${({ theme }) => theme.device.mobile} {
    bottom: 4%;
    right: 50%;
    transform: translateY(95%) translateX(50%);
    flex-direction: row;
    gap: 30px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    bottom: 4%;
    right: 50%;
    flex-direction: row;
    transform: translateY(95%) translateX(50%);
    gap: 30px;
  }
`;

const NavItem = styled.button<{
  $current: boolean;
  $currentbg: string;
  $bg: string;
}>`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: transform 0.5s;
  transform: ${(props) => (props.$current ? 'scale(150%)' : 'scale(100%)')};
  background-color: ${(props) =>
    props.$current && props.$currentbg === 'yellow'
      ? props.theme.themeColor.brown
      : props.$current && props.$currentbg === 'pink'
      ? props.theme.themeColor.yellow
      : props.$current && props.$currentbg === 'white'
      ? props.theme.themeColor.yellow
      : props.$current && props.$currentbg === 'brown'
      ? props.theme.themeColor.yellow
      : props.$bg};
  @media ${({ theme }) => theme.device.mobile} {
    width: 15px;
    height: 15px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 15px;
    height: 15px;
  }
`;

const NavItemTitle = styled.span<{ $current: boolean }>`
  display: ${(props) => (props.$current ? 'none' : 'inline')};
  opacity: 0;
  position: absolute;
  top: 0;
  right: 150%;
  padding: 5px 10px;
  height: 20px;
  background-color: black;
  color: white;
  font-size: 1.2rem;
  white-space: nowrap;

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
  #navItem:hover & {
    transition: opacity 0.5s;
    opacity: 1;
  }
`;

export default NavBar;
