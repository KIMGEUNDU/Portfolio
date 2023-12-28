import { useContactView } from '@/store/useContactView';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function NavBar() {
  const { view } = useContactView();
  const [bg, setBg] = useState('yellow');
  const [currentNavItem, setCurrentNavItem] = useState('IntroMenu');

  function handleNavItemClick(id: string) {
    setCurrentNavItem(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (e) => {
        e.forEach((v) => {
          if (v.isIntersecting) {
            setCurrentNavItem(v.target.id);

            switch (v.target.id) {
              case 'IntroMenu':
                setBg('yellow');
                break;

              case 'Promise':
                setBg('pink');
                break;
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const IntroPage = document.getElementById('IntroMenu');
    const PromisePage = document.getElementById('Promise');

    if (IntroPage && PromisePage) {
      observer.observe(IntroPage);
      observer.observe(PromisePage);
    }
  }, []);

  return (
    <Wrapper $appear={view}>
      <NavItem
        id="navItem"
        $current={currentNavItem === 'IntroMenu'}
        $bg={bg}
        onClick={() => handleNavItemClick('IntroMenu')}
      >
        <NavItemTitle $current={currentNavItem === 'IntroMenu'}>
          Intro Menu
        </NavItemTitle>
      </NavItem>
      <NavItem
        id="navItem"
        $current={currentNavItem === 'Promise'}
        $bg={bg}
        onClick={() => handleNavItemClick('Promise')}
      >
        <NavItemTitle $current={currentNavItem === 'Promise'}>
          Promise
        </NavItemTitle>
      </NavItem>
      <NavItem
        id="navItem"
        $current={currentNavItem === 'aboutme'}
        $bg={bg}
        onClick={() => handleNavItemClick('aboutme')}
      >
        <NavItemTitle $current={currentNavItem === 'aboutme'}>
          About Me
        </NavItemTitle>
      </NavItem>
      <NavItem
        id="navItem"
        $current={currentNavItem === 'ithink'}
        $bg={bg}
        onClick={() => handleNavItemClick('ithink')}
      >
        <NavItemTitle $current={currentNavItem === 'ithink'}>
          I Think
        </NavItemTitle>
      </NavItem>
      <NavItem
        id="navItem"
        $current={currentNavItem === 'skill'}
        $bg={bg}
        onClick={() => handleNavItemClick('skill')}
      >
        <NavItemTitle $current={currentNavItem === 'skill'}>Skill</NavItemTitle>
      </NavItem>
      <NavItem
        id="navItem"
        $current={currentNavItem === 'project'}
        $bg={bg}
        onClick={() => handleNavItemClick('project')}
      >
        <NavItemTitle $current={currentNavItem === 'project'}>
          Project
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

const NavItem = styled.button<{ $current: boolean; $bg: string }>`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: transform 0.5s;
  transform: ${(props) => (props.$current ? 'scale(150%)' : 'scale(100%)')};
  background-color: ${(props) =>
    props.$current && props.$bg === 'yellow'
      ? props.theme.themeColor.brown
      : props.$current && props.$bg === 'pink'
      ? props.theme.themeColor.yellow
      : 'white'};
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
  font-size: 20px;
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
