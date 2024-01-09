import { sb } from '@/api/supabase';
import AddButton from '@/components/Main/AddButton';
import AddSkillModal from '@/components/Main/AddSkillModal';
import SkillItem from '@/components/Main/SkillItem';
import { useData } from '@/store/useData';
import { useModal } from '@/store/useModal';
import { useEffect } from 'react';
import styled from 'styled-components';

function Skill() {
  const { skillModal, setSkillModal } = useModal();
  const { skill, setSkill } = useData();

  useEffect(() => {
    const getSkill = async () => {
      const { data } = await sb.from('skill').select('*');

      if (data) {
        setSkill(data);
      }
    };

    getSkill();
  }, [skill]);

  return (
    <Wrapper
      id="Skill"
      draggable={true}
      onDragStart={(e) => {
        e.preventDefault();
      }}
    >
      <MyWill>I Grow Up</MyWill>
      {skill &&
        skill.map((v, i) => {
          return (
            <SkillItem
              key={i}
              top={v.top}
              left={v.left}
              deg={v.deg}
              bg={v.bg}
              color={v.color}
            >
              {v.skill}
            </SkillItem>
          );
        })}

      <AddButton
        top={5}
        right={5}
        color="#F8BAA0"
        onClick={() => setSkillModal(true)}
      >
        Add Skill
      </AddButton>
      {skillModal && <AddSkillModal />}
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
