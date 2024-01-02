import iphone from '@/assets/iphone.png';
import { useModal } from '@/store/useModal';
import { FaGithubAlt } from 'react-icons/fa';
import { ImMobile } from 'react-icons/im';
import { IoIosTabletLandscape } from 'react-icons/io';
import { IoLogoFigma } from 'react-icons/io5';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { SiNetlify } from 'react-icons/si';
import { TbDeviceImac, TbFileTypePpt } from 'react-icons/tb';
import mac from '@/assets/mac.png';
import styled from 'styled-components';
import Tag from './Tag';

function ProjectModal({ type }: { type: string }) {
  const value = ['React', 'Javascript', 'Typescript', 'Zustand', 'PocketBase'];
  const { setOpen } = useModal();

  return (
    <Wrapper>
      <Project>
        <ControlWrapper>
          <ControlButton
            onClick={() =>
              window.open('https://github.com/likelion-plus/counting-stars-13')
            }
          >
            <ControlImg as={SiNetlify} alt="배포사이트 보러가기" />
          </ControlButton>
          <ControlButton
            onClick={() =>
              window.open('https://github.com/likelion-plus/counting-stars-13')
            }
          >
            <ControlImg as={FaGithubAlt} alt="Github 보러가기" />
          </ControlButton>
          <ControlButton onClick={() => setOpen(false)}>
            <ControlImg as={RiArrowGoBackFill} alt="되돌아가기" />
          </ControlButton>
        </ControlWrapper>
        <ProjectContents>
          <ThumnailWrapper>
            <Thumnail
              src="https://i.pinimg.com/originals/8e/1a/40/8e1a40df89eedc9219f6da0506701c97.gif"
              alt="프로젝트 이미지"
            />
            <Icon>🏅</Icon>
          </ThumnailWrapper>
          <Title>Project Title</Title>
          <TagWrapper>
            <Tag value={value} project={true} />
          </TagWrapper>
          <ToolWrapper>
            {type === 'web' && (
              <Base>
                <ToolImg as={TbDeviceImac} alt="웹 프로젝트" $color="black" />
                &nbsp; 웹
              </Base>
            )}
            {type === 'mobile' && (
              <Base>
                <ToolImg as={ImMobile} alt="모바일 프로젝트" $color="black" />
                &nbsp; 모바일
              </Base>
            )}
            {type === 'responsive' && (
              <Base>
                <ToolImg
                  as={IoIosTabletLandscape}
                  alt="반응형 프로젝트"
                  $color="black"
                />
                &nbsp; 반응형
              </Base>
            )}
            <ToolLink href="#" target="_blank" rel="noreferrer noopener">
              <ToolImg as={SiNetlify} alt="사이트 보러가기" $color="#5CAAB9" />
              Deploy
            </ToolLink>
            <ToolLink href="#" target="_blank" rel="noreferrer noopener">
              <ToolImg as={FaGithubAlt} alt="Github 보러가기" $color="black" />
              Github
            </ToolLink>
            <ToolLink href="#" target="_blank" rel="noreferrer noopener">
              <ToolImg as={IoLogoFigma} alt="Figma 보러가기" $color="#A259FF" />
              Figma
            </ToolLink>
            <ToolLink href="#" target="_blank" rel="noreferrer noopener">
              <ToolImg
                as={TbFileTypePpt}
                alt="최종발표 PPT 보러가기"
                $color="#C35033"
              />
              PPT
            </ToolLink>
          </ToolWrapper>
          <ContentWrapper>
            <PreviewWrapper $type={type}>
              {type === 'web' && (
                <>
                  <PreviewBase src={mac} alt="Designed by Freepik" />
                  <PreviewImg
                    src="https://github.com/KIMGEUNDU/Portfolio/assets/126174401/4e61232b-a4d8-430f-80ca-568277e84878"
                    alt="미리보기"
                    $type={type}
                  />
                </>
              )}
              {type === 'mobile' && (
                <>
                  <PreviewBase src={iphone} alt="Designed by Freepik" />
                  <PreviewImg
                    src="https://user-images.githubusercontent.com/126174401/270152375-b51a0401-d6fe-42b3-a395-81af9632b490.gif"
                    alt="미리보기"
                    $type={type}
                  />
                </>
              )}
            </PreviewWrapper>
            <Impression $type={type}>
              느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점느낀점
            </Impression>
          </ContentWrapper>
        </ProjectContents>
      </Project>
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
  z-index: 3;
  overflow: hidden;
`;

const Project = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 60%;
  height: 80%;
  padding-bottom: 30px;
  overflow: hidden;
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
  margin: 0 7px;
`;

const ControlImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ProjectContents = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  border-radius: 0 0 10px 10px;
  &::-webkit-scrollbar-thumb {
    background-color: #c1a787;
    border-radius: 0 0 10px 0;
  }
  &::-webkit-scrollbar-track {
    background-color: #cecece;
    border-radius: 0 0 10px 0;
  }
  &::-webkit-scrollbar {
    width: 12px;
  }
`;

const ThumnailWrapper = styled.div`
  position: relative;
  margin-bottom: 65px;
  height: 45%;
`;

const Thumnail = styled.img`
  width: 100%;
  height: 100%;
`;

const Icon = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(50%);
  font-size: 5vw;
  padding: 0 5%;
`;

const Title = styled.p`
  font-size: 2.5vw;
  font-weight: 600;
  padding: 0 5%;
`;

const TagWrapper = styled.p`
  display: flex;
  gap: 2%;
  padding: 2% 4%;
`;

const ToolWrapper = styled.div`
  padding: 1% 4%;
  display: flex;
  gap: 2%;
`;

const ToolLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: black;
`;

const Base = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2%;
  border-right: 2px solid black;
`;

const ToolImg = styled.img<{ $color?: string }>`
  width: 30px;
  height: 100%;
  color: ${(props) => props.$color};
`;

const ContentWrapper = styled.div`
  padding: 3% 5%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const PreviewWrapper = styled.div<{ $type: string }>`
  box-sizing: border-box;
  position: relative;
  width: ${(props) => (props.$type === 'mobile' ? '30%' : '50%')};
  height: ${(props) => (props.$type === 'mobile' ? 'auto' : '350px')};
  padding: ${(props) => (props.$type === 'mobile' ? '6.1% 1%' : '1.1% 1%')};
`;

const PreviewBase = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const PreviewImg = styled.img<{ $type: string }>`
  width: 100%;
  height: ${(props) => (props.$type === 'mobile' ? '100%' : '68%')};
`;

const Impression = styled.p<{ $type: string }>`
  width: ${(props) => (props.$type === 'mobile' ? '70%' : '50%')};
`;

export default ProjectModal;
