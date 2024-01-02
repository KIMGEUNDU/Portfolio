import styled from 'styled-components';
import Tag from './Tag';
import mac from '@/assets/mac.png';
import iphone from '@/assets/iphone.png';
import { useModal } from '@/store/useModal';

function ProjectItem({ type }: { type: string }) {
  const value = ['React', 'Javascript', 'Typescript'];
  const { setOpen } = useModal();

  return (
    <Wrapper>
      <ThumnailWrapper onClick={() => setOpen(true)}>
        {type === 'web' && (
          <>
            <Mac src={mac} alt="Designed by Freepik" />
            <ThumnailWeb
              src="https://github.com/KIMGEUNDU/Portfolio/assets/126174401/4e61232b-a4d8-430f-80ca-568277e84878"
              alt="프로젝트 이미지"
            />
          </>
        )}
        {type === 'mobile' && (
          <>
            <Mobile src={iphone} alt="Designed by Freepik" />
            <ThumnailMobile
              src="https://user-images.githubusercontent.com/86372549/270151749-17d2d9a1-3b09-4981-a8ff-f5a96888f581.gif"
              alt="프로젝트 이미지"
            />
          </>
        )}
      </ThumnailWrapper>
      <figcaption>
        <Name>프로젝트명</Name>
        <Explanation>
          프로젝트 요약입니다.프로젝트 요약입니다.프로젝트 요약입니다.프로젝트
          요약입니다.프로젝트 요약입니다.
        </Explanation>
        <TagWrapper>
          <Tag value={value} />
        </TagWrapper>
      </figcaption>
    </Wrapper>
  );
}

const Wrapper = styled.figure`
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
`;

const ThumnailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
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
  padding-top: 10px;
  padding-bottom: 2px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 47%;
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 47%;
  }
`;

const Name = styled.p`
  font-size: 1.8vw;
  padding: 20px 2%;
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

const Explanation = styled.p`
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
  padding: 5% 2%;
  display: flex;
  gap: 2%;
`;

export default ProjectItem;
