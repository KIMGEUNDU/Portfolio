import SkillItem from '@/components/Main/SkillItem';
import styled from 'styled-components';

function Skill() {
  return (
    <Wrapper id="Skill">
      <MyWill>I Grow Up</MyWill>
      {/* Yellow */}
      <SkillItem top={27} left={26} bg="yellow" color="black" deg={-15}>
        Zustand
      </SkillItem>
      <SkillItem top={35} left={60} bg="yellow" color="black" deg={20}>
        Recoil
      </SkillItem>
      <SkillItem top={60} left={56} bg="yellow" color="black" deg={-10}>
        Pocketbase
      </SkillItem>
      <SkillItem top={60} left={25} bg="yellow" color="black" deg={-15}>
        Figma
      </SkillItem>
      <SkillItem top={40} left={8} bg="yellow" color="black" deg={-20}>
        Notion
      </SkillItem>
      {/* Brown */}
      <SkillItem top={50} left={60} bg="brown" color="white" deg={10}>
        Styled Component
      </SkillItem>
      <SkillItem top={44} left={25} bg="brown" color="white" deg={-20}>
        Sass
      </SkillItem>
      <SkillItem top={30} left={40} bg="brown" color="white" deg={-10}>
        TailwindCSS
      </SkillItem>
      <SkillItem top={65} left={42} bg="brown" color="white" deg={10}>
        Emotion
      </SkillItem>
      {/* Pink */}
      <SkillItem top={30} left={15} bg="pink" color="black" deg={30}>
        HTML
      </SkillItem>
      <SkillItem top={65} left={75} bg="pink" color="black" deg={-20}>
        CSS
      </SkillItem>
      <SkillItem top={50} left={45} bg="pink" color="black" deg={-20}>
        React
      </SkillItem>
      <SkillItem top={55} left={5} bg="pink" color="black" deg={10}>
        JavaScript
      </SkillItem>
      <SkillItem top={30} left={70} bg="pink" color="black" deg={-20}>
        TypeScript
      </SkillItem>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.tablet} {
  }
  @media ${({ theme }) => theme.device.laptop} {
  }
`;

const MyWill = styled.h2`
  font-size: 15vw;
  font-weight: 900;
`;

export default Skill;
