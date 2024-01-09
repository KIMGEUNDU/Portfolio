import { sb } from '@/api/supabase';
import { useData } from '@/store/useData';
import { useModal } from '@/store/useModal';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { RiArrowGoBackFill } from 'react-icons/ri';
import styled from 'styled-components';
import SelectInput from './SelectInput,';

function AddSkillModal() {
  const Skills = [
    'HTML',
    'CSS',
    'React',
    'JavaScript',
    'TypeScript',
    'Sass',
    'TailwindCSS',
    'Emotion',
    'Styled Component',
    'Notion',
    'Zustand',
    'Figma',
    'Pocketbase',
    'Recoil',
  ];
  const { setSkillModal } = useModal();
  const { skill } = useData();
  const [selectColor, setSelectColor] = useState(false);
  const [selectBg, setSelectBg] = useState(false);
  const [deg, setDeg] = useState(0);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [bg, setBg] = useState('선택');
  const [color, setColor] = useState('선택');
  const [skillName, setSkillName] = useState('');

  const selectedColor = (color: string) => {
    setColor(color);
    setSelectColor(false);
  };

  const selectedBg = (bg: string) => {
    setBg(bg);
    setSelectBg(false);
  };

  const closeModal = () => {
    setSkillModal(false);
    setSelectColor(false);
    setSelectBg(false);
    setDeg(0);
    setTop(0);
    setLeft(0);
    setBg('');
    setColor('선택');
    setSkillName('');
  };

  const submitSkill = async (e: React.FormEvent) => {
    e.preventDefault();
    setSelectColor(false);

    Skills.forEach((v) => {
      if (v.toLowerCase() === skillName.toLowerCase()) {
        toast('이미 등록된 Skill 입니다', {
          icon: '✌🏻',
          duration: 1000,
        });
      }
    });

    if (color === '선택') {
      toast('글자색을 정해주세요', {
        icon: '✅',
        duration: 1000,
      });
    }

    if (bg === '') {
      toast('배경색을 정해주세요', {
        icon: '✅',
        duration: 1000,
      });
    }

    const addSkill = {
      id: skill.length + 1,
      top: top,
      left: left,
      deg: deg,
      bg: bg.slice(3),
      color: color.slice(3),
      skill: skillName,
    };

    try {
      await sb.from('skill').insert(addSkill);

      toast('업로드되었습니다', {
        icon: '✨',
        duration: 1000,
      });

      setSkillModal(false);
      setSelectColor(false);
      setSelectBg(false);
      setDeg(0);
      setTop(0);
      setLeft(0);
      setBg('');
      setColor('선택');
      setSkillName('');
    } catch (err) {
      console.error(err);

      toast('잠시후 다시 시도해주세요', {
        icon: '😱',
        duration: 1000,
      });
    }
  };

  return (
    <Wrapper>
      <Skill>
        <ControlWrapper>
          <ControlButton onClick={closeModal}>
            <ControlImg as={RiArrowGoBackFill} alt="되돌아가기" />
          </ControlButton>
        </ControlWrapper>
        <ThumnailWrapper>
          <Thumnail
            src="https://i.pinimg.com/originals/8d/f5/0c/8df50c91577b354509560024ef2a4032.gif"
            alt="프로젝트 이미지"
          />
          <Icon>Skill</Icon>
        </ThumnailWrapper>
        <FormWrapper onSubmit={submitSkill}>
          <ExceptButton>
            <ExceptPreview>
              <StyleWrapper>
                <fieldset style={{ whiteSpace: 'nowrap' }}>
                  <Label htmlFor="rotate">각도</Label>
                  <Input
                    id="rotate"
                    name="rotate"
                    type="number"
                    placeholder="0"
                    min="-360"
                    max="360"
                    required
                    onChange={(e) => setDeg(Number(e.target.value))}
                    $type="number"
                  />
                  <span>deg</span>
                </fieldset>
                <fieldset style={{ display: 'flex' }}>
                  <SelectInput
                    label="글자색"
                    select={selectColor}
                    onSelect={() => setSelectColor(!selectColor)}
                    color={color}
                    onColor={selectedColor}
                    value={['🤍 white', '🖤 black']}
                  />
                </fieldset>
              </StyleWrapper>
              <StyleWrapper>
                <fieldset style={{ whiteSpace: 'nowrap' }}>
                  <Label htmlFor="top">위치</Label>
                  <Input
                    id="top"
                    name="top"
                    type="number"
                    placeholder="0"
                    onChange={(e) => setTop(Number(e.target.value))}
                    $type="number"
                    required
                  />
                  <span style={{ paddingRight: '10px' }}>top</span>
                  <label htmlFor="left" style={{ display: 'none' }}>
                    위치
                  </label>
                  <Input
                    id="left"
                    name="left"
                    type="number"
                    placeholder="0"
                    onChange={(e) => setLeft(Number(e.target.value))}
                    $type="number"
                    required
                  />
                  <span>left</span>
                </fieldset>
              </StyleWrapper>
              <StyleWrapper>
                <fieldset style={{ display: 'flex' }}>
                  <SelectInput
                    label="배경색"
                    select={selectBg}
                    onSelect={() => setSelectBg(!selectBg)}
                    color={bg}
                    onColor={selectedBg}
                    value={['💛 yellow', '🩷 pink', '🤎 brown', '🩵 blue']}
                  />
                </fieldset>
              </StyleWrapper>
              <StyleWrapper>
                <fieldset>
                  <Label htmlFor="skill">기술</Label>
                  <Input
                    id="skill"
                    name="skill"
                    type="text"
                    onChange={(e) => setSkillName(e.target.value)}
                    autoComplete="off"
                    $type="text"
                    required
                    maxLength={17}
                  />
                </fieldset>
              </StyleWrapper>
            </ExceptPreview>
            <PreviewWrapper>
              <Span>I GROW UP</Span>
              <Priview
                $top={top}
                $left={left}
                $deg={deg}
                $bg={bg}
                $color={color}
                $skill={skillName}
              >
                {skillName}
              </Priview>
            </PreviewWrapper>
          </ExceptButton>
          <SubmitButton type="submit">등록</SubmitButton>
        </FormWrapper>
      </Skill>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(61, 61, 61, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  overflow: hidden;
`;

const Skill = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 50%;
  height: 50%;
  padding-bottom: 30px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 80%;
    height: 60%;
    padding-bottom: 0;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 80%;
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 80%;
  }
`;

const ControlWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 0 2%;
  text-align: right;
`;

const ControlButton = styled.button`
  width: 30px;
  height: 100%;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const ControlImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ThumnailWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  height: 40%;
  @media ${({ theme }) => theme.device.mobile} {
    height: 25%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    height: 30%;
  }
  @media ${({ theme }) => theme.device.laptop} {
    height: 40%;
  }
`;

const Thumnail = styled.img`
  width: 100%;
  height: 100%;
`;

const Icon = styled.span`
  font-family: 'Cafe24Shiningstar';
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(50%);
  font-size: 5vw;
  padding: 0 5%;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 10vw;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 10vw;
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 7vw;
  }
`;

const FormWrapper = styled.form`
  box-sizing: border-box;
  width: 100%;
  height: 60%;
  border-radius: 0 0 10px 10px;
  padding: 2% 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 1% 5%;
    height: 90%;
    font-size: 3vw;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 1% 5%;
    font-size: 2.5vw;
  }
  @media ${({ theme }) => theme.device.laptop} {
    padding: 1% 5%;
    font-size: 2.5vw;
    height: 100%;
  }
`;

const ExceptButton = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  height: 70%;
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    height: 60%;
    gap: 10px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    height: 100%;
  }
  @media ${({ theme }) => theme.device.laptop} {
    height: 40%;
  }
`;

const ExceptPreview = styled.div`
  justify-content: space-between;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: '10px';
  @media ${({ theme }) => theme.device.tablet} {
    gap: 0;
  }
`;

const StyleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
`;

const Label = styled.label`
  white-space: nowrap;
  width: 60px;
  display: inline-block;
  @media ${({ theme }) => theme.device.laptop} {
    width: 90px;
  }
`;

const Input = styled.input<{ $type?: string }>`
  width: ${(props) =>
    props.$type === 'text'
      ? '200px'
      : props.$type === 'number'
      ? '45px'
      : '100px'};
  border: 2px solid white;
  font-weight: 600;
  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.themeColor.blue};
    border-radius: 5px;
  }
  &::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 3vw;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 2.5vw;
    width: ${(props) =>
      props.$type === 'text'
        ? '25vw'
        : props.$type === 'number'
        ? '5vw'
        : '50px'};
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 2vw;
    width: ${(props) =>
      props.$type === 'text'
        ? '30vw'
        : props.$type === 'number'
        ? '5vw'
        : '100px'};
  }
`;

const SubmitButton = styled.button`
  position: relative;
  background-color: transparent;
  width: 15%;
  border: none;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    transition: all 0.5s;
    transform: scale(120%);
    color: ${(props) => props.theme.themeColor.blue};
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 3vw;
  }
`;

const PreviewWrapper = styled.fieldset`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  border: 2px solid ${(props) => props.theme.themeColor.blue};
  border-radius: 5px;
  overflow: hidden;
  @media ${({ theme }) => theme.device.mobile} {
    width: 80%;
    height: 40%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
`;

const Span = styled.span`
  white-space: nowrap;
  font-size: 3vw;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 10vw;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 5vw;
  }
`;

const Priview = styled.span<{
  $top: number;
  $left: number;
  $bg: string;
  $color: string;
  $deg: number;
  $skill: string;
}>`
  text-align: center;
  position: absolute;
  top: ${(props) => (props.$top ? `${props.$top}%` : '50%')};
  left: ${(props) => (props.$left ? `${props.$left}%` : '50%')};
  transform: ${(props) =>
    !props.$top && !props.$left
      ? `translate(-50%, -50%) rotate(${props.$deg}deg)`
      : `rotate(${props.$deg}deg)`};
  background-color: ${(props) =>
    props.$bg
      ? props.theme.themeColor[props.$bg.slice(3)]
      : props.theme.themeColor.blue};
  color: ${(props) => (props.$color.includes('black', 0) ? 'black' : 'white')};
  border-radius: 100px;
  width: ${(props) => (props.$skill ? 'auto' : '20%')};
  height: ${(props) => (props.$skill ? 'auto' : '20px')};
  font-size: 1vw;
  padding: 1% 4%;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 4vw;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 2vw;
    padding: 1% 6%;
  }
`;

export default AddSkillModal;
