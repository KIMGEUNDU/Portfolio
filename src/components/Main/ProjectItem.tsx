import styled from 'styled-components';
import Tag from './Tag';
import mac from '@/assets/mac.png';
import iphone from '@/assets/iphone.png';
import { useModal } from '@/store/useModal';

function ProjectItem({
  id,
  name,
  type,
  skill,
  summary,
  image,
}: Pick<Project, 'id' | 'name' | 'type' | 'skill' | 'summary' | 'image'>) {
  const { setOpen, setSelectId } = useModal();

  return (
    <Wrapper>
      <ThumnailWrapper
        onClick={() => {
          setOpen(true), setSelectId(id);
        }}
      >
        {type === 'web' && (
          <>
            <Mac src={mac} alt="Designed by Freepik" />
            <ThumnailWeb src={image} alt={`${name} 썸네일이미지`} />
          </>
        )}
        {type === 'mobile' && (
          <>
            <Mobile src={iphone} alt="Designed by Freepik" />
            <ThumnailMobile src={image} alt={`${name} 썸네일이미지`} />
          </>
        )}
        {!image && <Noimage>진행중</Noimage>}
      </ThumnailWrapper>
      <Figcaption>
        <Name>{name}</Name>
        <Summary>{summary}</Summary>
        <TagWrapper>
          <Tag value={skill.slice(0, 3)} />
        </TagWrapper>
      </Figcaption>
    </Wrapper>
  );
}

const Wrapper = styled.figure`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

const ThumnailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
`;

const Noimage = styled.p`
  font-family: 'Cafe24Shiningstar';
  font-size: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 7vw;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 7vw;
  }
`;

const Mac = styled.img`
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 98%;
  height: 100%;
`;

const ThumnailWeb = styled.img`
  box-sizing: border-box;
  width: 98%;
  height: 85%;
  padding: 10px;
`;

const Mobile = styled.img`
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 35%;
  height: 100%;
  z-index: 1;
  @media ${({ theme }) => theme.device.mobile} {
    width: 50%;
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 50%;
  }
`;

const ThumnailMobile = styled.img`
  box-sizing: border-box;
  width: 33%;
  height: 100%;
  border-radius: 20px;
  padding-top: 38px;
  padding-bottom: 30px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 47%;
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 47%;
  }
`;

const Figcaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 39%;
`;

const Name = styled.p`
  font-family: 'Cafe24Shiningstar';
  font-size: 1.8vw;
  padding: 10px 2%;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 7vw;
    padding: 10px 2%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 5vw;
    padding: 10px 2%;
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 4vw;
    padding: 10px 2%;
  }
`;

const Summary = styled.pre`
  flex-grow: 1;
  white-space: break-spaces;
  padding: 0 2%;
  font-size: 1vw;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 3vw;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 2.5vw;
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 1.5vw;
  }
`;

const TagWrapper = styled.p`
  padding: 0 2%;
  display: flex;
  gap: 2%;
`;

export default ProjectItem;
