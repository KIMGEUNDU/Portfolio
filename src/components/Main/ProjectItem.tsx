import styled from 'styled-components';
import Tag from './Tag';
import mac from '@/assets/mac.png';
import iphone from '@/assets/iphone.png';

function ProjectItem({ type }: { type: string }) {
  const value = ['React', 'Javascript', 'Typescript'];

  return (
    <Wrapper>
      <ThumnailWrapper>
        {type === 'web' && (
          <>
            <Mac src={mac} alt="웹사이트 프로젝트" />
            <ThumnailWeb
              src="https://github.com/KIMGEUNDU/Portfolio/assets/126174401/4e61232b-a4d8-430f-80ca-568277e84878"
              alt="프로젝트 이미지"
            />
          </>
        )}
        {type === 'mobile' && (
          <>
            <Mobile src={iphone} alt="모바일 프로젝트" />
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
          이러이러한 프로젝트이다이러이러한 프로젝트이다이러이러한
          프로젝트이다이러이러한 프로젝트이다이러이러한 프로젝트이다이러이러한
          프로젝트이다이러이러한 프로젝트이다이러이러한 프로젝트이다이러이러한
          프로젝트이다이러이러한 프로젝트이다이러이러한 프로젝트이다
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
`;

const ThumnailMobile = styled.img`
  box-sizing: border-box;
  width: 33%;
  height: 100%;
  border-radius: 20px;
  padding-top: 10px;
  padding-bottom: 2px;
`;

const Name = styled.p`
  font-size: 2vw;
  padding: 20px 2%;
`;

const Explanation = styled.p`
  padding: 0 2%;
  font-size: 1.2vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const TagWrapper = styled.p`
  padding: 15% 2%;
  display: flex;
  gap: 2%;
`;

export default ProjectItem;
